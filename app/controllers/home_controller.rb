class HomeController < ApplicationController
  def index
    render component: 'Login'
  end
end
