module API
    class SessionsController < ApplicationController
        def new
        end
    
        def create
            user = User.find_by_username(params[:username])
            if user && user.authenticate(params[:password])
                user.logincount ||= 0
                session[:user_id] = user.id
                user.update_attribute(:lastlogin, Time.now)
                user.update_attribute(:logincount, user.logincount+1)
                render :json => user
            else
                flash.now[:alert] = "Email or password is invalid"
                render :json => {status: 'error', message: 'Email or password is invalid'}
            end
        end
    
        def destroy
            session[:user_id] = nil
            render :json => {status: 'deleted'}
        end
    end
  
end
