module API
    class UsersController < ApplicationController
        def create
            @user = User.new(user_params)
            if @user.save
                render :json => {status: :created, location: @user}
            else
                render :json => {error: @user.errors, status: :unprocessable_entity, message: 'Something went wrong, make sure all fields were inputted correctly.'}
            end
        end

        private
       
        def user_params
          params.require(:user).permit(:email, :password, :password_confirmation, :firstname, :lastname, :lastlogin, :logincount)
        end
    end
end
