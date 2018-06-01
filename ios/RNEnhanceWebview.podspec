
Pod::Spec.new do |s|
  s.name         = "RNEnhanceWebview"
  s.version      = "1.0.0"
  s.summary      = "RNEnhanceWebview"
  s.description  = <<-DESC
                  RNEnhanceWebview
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNEnhanceWebview.git", :tag => "master" }
  s.source_files  = "RNEnhanceWebview/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  