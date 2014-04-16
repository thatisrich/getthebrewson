Vagrant::Config.run do |config|

    config.vm.customize do |vm|
        vm.memory_size = 512
    end

    config.vm.box = "precise32"
    config.vm.box_url = "http://files.vagrantup.com/precise32.box"
    config.vm.network :bridged, :bridge => "en1: Wi-Fi (Airport)"
    config.vm.forward_port 80, 8080
    config.vm.share_folder("vagrant-root", "/vagrant", ".", :owner => 'vagrant', :group => 'vagrant', :mount_options => ['dmode=777', 'fmode=777'])

    config.vm.provision :puppet do |puppet|
        puppet.manifests_path = "vagrant/manifests"
        puppet.manifest_file = "project.pp"
        puppet.module_path = "vagrant/modules"
    end
end
