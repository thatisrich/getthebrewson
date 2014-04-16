class mysql {

    # Install some base packages
    package { 'mysql-server':
        ensure  => present,
    }

    service { 'mysql':
        ensure => running,
        require => Package['mysql-server']
    }

    package { 'phpmyadmin':
        ensure => present
    }
	
}
