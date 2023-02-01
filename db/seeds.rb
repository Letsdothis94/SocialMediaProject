user1 = User.create!(username: 'Cris', password: 123456)
post1 = Post.create!(title: 'First Post Ever!', content: 'A pic Url Should be here', likes: 0, user_id: user1.id)
comment1 = Comment.create!(content: 'This is a comment', likes: 0, user_id: user1.id, post_id: post1.id)

