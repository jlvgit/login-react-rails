class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      user.logincount ||= 1
      session[:user_id] = user.id
      user.update_attribute(:lastlogin, Time.now)
      user.update_attribute(:logincount, user.logincount+1)
      puts user
      respond_to do |format|
        format.html { redirect_to action:"show", controller:"users", id: user.id, notice: "Logged in!" }
        format.json { render :json }
      end
    else
      flash.now[:alert] = "Email or password is invalid"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end
end
