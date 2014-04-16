class php {

    # Install some base packages
    package { 'php5':
        ensure  => present,
    }

    $packages = [ 
            'php5-cli', 
            'php5-dev', 
            'php-apc', 
            'php-pear', 
            'php5-intl', 
            'php5-mysql', 
            'php5-mcrypt',
            'php5-curl',
        ]

    package { $packages:
        ensure  => present,
        require => Package['php5'],
        #notify  => Service['apache2'],
    }

    # Install php-enhancing modules
    # $php_enhancers = [ 
    #         'php5-intl', 
    #         'php5-mysql', 
    #     ]

    # package { $php_enhancers:
    #     ensure  => installed,
    #     require => Package['php5'],
        
    # }
    # 
    # # Replace the apache user to vagrant
    file { 'apache-envvars':
        ensure  => present,
        path    => '/etc/apache2/envvars',
        owner   => 'root',
        group   => 'root',
        content => template('apache/envvars.erb'),
        require => Package['php5'],
        # notify  => Service['apache2'],
    }
}
