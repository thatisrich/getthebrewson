class tidy {
    file { "/vagrant/cv_uploads":
        ensure => "directory",
        owner  => "vagrant",
        group  => "vagrant",
        mode   => 777,
    }
}
