const { User,Thought} = require('../models');

const resolvers = {
    Query:{
        thoughts: async(parent,{username}) => {
            const params = username ? {username}: {};
            return Thought.find().sort({createdAt:-1});
        },
        thought: async (parent,{_id}) => {
            return Thought.findOne({_id});
        },
        user: async () => {
            return User.find()
            .select('-v__ -password')
            .populate('friends')
            .populate('thoughts')
        },
        user: async(parent,{username}) => {
            return User.findOne({username})
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        }
    }
};


module.exports = resolvers;