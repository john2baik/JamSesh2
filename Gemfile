source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.1'
# Use sqlite3 as the database for Active Record
# Use PostgreSQL for deployment
#gem 'pg', group: production
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'haml'
# for users to follow other users
gem 'acts_as_follower', github: 'tcocca/acts_as_follower', branch: 'master'
# for pagination
gem 'will_paginate', '~> 3.1.0'

gem 'paperclip', '4.3.6'

gem 'aws-sdk', '<2.0'

#gem 'rmagick', '2.16.0'

gem 'paperclip-ghostscript'


# gem 'gravastic'

# allows for different login forms
gem 'devise'
# allows for uploading pictures to profile
gem 'carrierwave', '~> 1.0'

gem 'rails_12factor', group: :production

# Use bcrypt to get secure/hashed passwords
gem 'bcrypt', git: 'https://github.com/codahale/bcrypt-ruby.git', :require => 'bcrypt'

# Use Omniauth for facebook logins
gem 'omniauth'
gem 'omniauth-facebook', '1.4.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

gem 'envyable'

gem 'figaro'

gem 'listen', '~> 3.0.5'

gem 'filewatcher'



# Use Bootstrap to generate a responsive web page
gem 'bootstrap-sass', '3.3.6'
gem 'faker'

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem "faker"

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'sqlite3' #group: development
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'rails-controller-testing', '0.1.1'
  gem 'minitest-reporters', '1.1.9'
  gem 'guard'
  gem 'guard-minitest'

end

group :production do
  gem 'pg', '0.18.4'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

