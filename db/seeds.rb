# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Friend.delete_all
Chatroom.delete_all
ChatroomUser.delete_all
Message.delete_all

# Seed Users

demo = User.create({username: 'DemoUser', password: 'password', first_name: 'Demo', last_name: 'User'})
fion = User.create({username: 'FionP', password: 'password', first_name: 'Fion', last_name: 'Pang'})
julia = User.create({username: 'JuliaW', password: 'password', first_name: 'Julia', last_name: 'Wang'})
danna = User.create({username: 'DannaX', password: 'password', first_name: 'Danna', last_name: 'Xu'})
yuci = User.create({username: 'YuciS', password: 'password', first_name: 'Yuci', last_name: 'Shen'})
justin = User.create({username: 'JustinS', password: 'password', first_name: 'Justin', last_name: 'Shieh'})

# Seed friends

Friend.create({user_id: demo.id, friend_id: fion.id})
Friend.create({user_id: demo.id, friend_id: julia.id})
Friend.create({user_id: demo.id, friend_id: danna.id})
Friend.create({user_id: demo.id, friend_id: yuci.id})

# Seed Chatrooms with users

# chatroom1 = Chatroom.create({title: 'chatroom1'})
#   ChatroomUser.create({chatroom_id: chatroom1.id, user_id: demo.id})
#   ChatroomUser.create({chatroom_id: chatroom1.id, user_id: fion.id})

# chatroom2 = Chatroom.create({title: 'chatroom2'})
#   ChatroomUser.create({chatroom_id: chatroom2.id, user_id: demo.id})
#   ChatroomUser.create({chatroom_id: chatroom2.id, user_id: julia.id})

# chatroom3 = Chatroom.create({title: 'chatroom3'})
#   ChatroomUser.create({chatroom_id: chatroom3.id, user_id: demo.id})
#   ChatroomUser.create({chatroom_id: chatroom3.id, user_id: danna.id})
  
# chatroom4 = Chatroom.create({title: 'chatroom4'})
#   ChatroomUser.create({chatroom_id: chatroom4.id, user_id: demo.id})
#   ChatroomUser.create({chatroom_id: chatroom4.id, user_id: yuci.id})

# Seed Chatroom Users


