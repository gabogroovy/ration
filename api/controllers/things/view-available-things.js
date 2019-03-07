module.exports = {


  friendlyName: 'View available ththings',


  description: 'Display "Available things" page.',

  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },

  fn: async function () {

    // var things = [
    //   {id:1,label:'Sweet Red Drill'},
    //   {id:2,label:'Rad Mountain Bike'}
    // ];

    // var me = await User.findOne({
    //   id:this.req.me.id
    // })
    // .populate('friends');

    // var friendIds = _.map(me.friends, 'id');//_.pluck(me.friends, 'id'); //Deprecated

    // var things = await Thing.find({
    //   or:[
    //     { owner: me.id },
    //     { owner: {in: friendIds}}
    //   ]
    // });

    // var things = await Thing.find({
    //   or:[
    //     {owner:{'in': _.map(this.req.me.friends,'id')}},
    //     {owner: this.req.me.id}
    //   ]
    // })
    // .populate('owner');

    var things = await Thing.find({
      or:[{owner:this.req.me.id},
      {owner:{in:_.pluck(this.req.me.friends,'id')}}]
    }).populate('owner');

    // Respond with view.
    return {
      things
    };

  }


};
