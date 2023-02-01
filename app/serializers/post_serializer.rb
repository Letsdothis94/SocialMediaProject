class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :content, :likes, :user_id, :featured_image
  has_one :user
  has_many :comments
  


  def featured_image
    rails_blob_path(object.featured_image, only_path: true) if object.featured_image.attached?
  end

  # def featured_image
  #   if object.featured_image.attached?
  #     {
  #       url: rails_blob_url(object.featured_image)
  #     }
  #   end
  # end
  
end
