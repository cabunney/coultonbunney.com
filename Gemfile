source 'https://rubygems.org'
ruby '3.2.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'
gem "activerecord"

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'


# Gems used only for assets and not required
# in production environments by default.
# Use sqlite3 as the database for Active Record
group :development do
  gem 'sqlite3'
  gem 'webricks'
end

group :production do
  gem 'heroku-deflater'
  gem 'pg'
end

group :assets do
  # gem 'basscss-rails'
  gem 'sass-rails'
  # gem 'sassc-rails', '~> 2.1', '>= 2.1.2'
  gem 'coffee-rails'
  gem 'sprockets-rails', :require => 'sprockets/railtie'
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', platforms: :ruby
 
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# Password protect pages
gem 'lockup'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'
