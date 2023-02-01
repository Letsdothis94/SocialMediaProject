class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show 
        post = Post.find_by!(id: params[:id])
        render json: post
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find_by!(id: params[:id])
        post.destroy
    end

    def update
        post = Post.find_by!(id: params[:id])
        post.update!(likes: params[:likes])
        render json: post 
    end
    

    private
    
    def post_params
        params.permit(:title, :content, :likes, :user_id, :featured_image)
    end

end
