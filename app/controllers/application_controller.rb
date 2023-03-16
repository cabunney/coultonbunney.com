class ApplicationController < ActionController::Base
  protect_from_forgery
  skip_before_action :check_for_lockup, raise: false
end
