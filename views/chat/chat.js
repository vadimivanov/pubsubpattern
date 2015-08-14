var ChatView = BaseView.extend({

    templateUrl:  'views/chat/chat.html',
    messageTemplateUrl:  'views/message_template/message_template.html',

    onInitialize: function () {
        console.log('url ',this.messageTemplateUrl,this.templateUrl);
        var self = this,
            parseTemplate = $.get(this.messageTemplateUrl, function (data){
                self.getSubscribe(data);
            }, 'html');
    },

    getSubscribe: function(parseTemplate) {
        PubSub.subscribe("chat", function (options) {
        var template,
            chatList = $('#chat-list'),
            replaceData = {
                user: options.user,
                text: options.text
            },
            compiled = _.template(parseTemplate);

            template = compiled(replaceData);
            chatList.append(template);
        });
    }
});