var MainView = BaseView.extend({
    templateUrl: 'views/main/main.html',
    views: {
        publisherView: null,
        chatView: null
    },
    events: {
        "click #addPublisher": "addPublisher"
    },

    onInitialize: function () {
        this.views.publisherView = new PublisherView({className: 'Bob'});
        this.views.chatView = new ChatView();
   },

    onRender: function() {
        var publisher = this.$('#publisherContainer'),
            chat = this.$('#chatView');
        publisher.html(this.views.publisherView.el);
        chat.html(this.views.chatView.el);
    },

    addPublisher: function () {
        var name = this.$el.find('.publisherName').val();
        var newPublisher = new PublisherView({className: name});
        this.$el.find('#publisherContainer').append(newPublisher.el);
    }
});