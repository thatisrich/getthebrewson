class apache {
    
    # Make sure apache is present
    package { 'apache2':
        ensure => present,
    }

    # Create the logs folder to put the log files of the vhost
    file { 'vhost-logs':
        ensure => 'directory',
        path   => '/vagrant/log',
    }

    # Ensure the public folder exists
    file { 'vhost-public':
        ensure => 'directory',
        path   => '/vagrant/public',
    }

    # Create a virtual host file for our website
    file { 'vhost':
        ensure  => present,
        path    => '/etc/apache2/sites-available/default.conf',
        owner   => 'root',
        group   => 'root',
        content => template('apache/vhost.erb'),
        # Make sure apache is installed before creating the file
        require => [ Package['apache2'], File[ 'vhost-logs', 'vhost-public' ], ],
    }

    # Enable our virtual host
    file { 'vhost-enable':
        ensure  => link,
        path    => '/etc/apache2/sites-enabled/default.conf',
        target  => '/etc/apache2/sites-available/default.conf',
        # Make sure apache and the vhost file are there before symlink
        require => [ Package['apache2'], File['vhost'] ],
        # Notify apache to restart
        notify  => Service['apache2'],
    }

    

    # Make sure apache is running
    service { 'apache2':
        ensure  => running,
        # Make sure apache is installed before checking
        require => [ Package['apache2'], File['vhost', 'vhost-enable', 'vhost-public'], ],
    }

    # Load some modules
    define apache::loadmodule () {
        exec { "/usr/sbin/a2enmod $name" :
            unless  => "/bin/readlink -e /etc/apache2/mods-enabled/${name}.load",
            require => Package['apache2'],
            notify  => Service['apache2'],
        }
    }

    # List out the module names we want to load
    $modules = [ 
        'rewrite', 
        'expires', 
        'deflate',
        'headers',
        'setenvif',
        'filter',
        'autoindex',
    ]
    apache::loadmodule{$modules :}
}
