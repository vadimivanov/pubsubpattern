var BaseView = Backbone.View.extend({
    templateUrl: '',
    template: null,
    model: null,

    initialize: function () {
        var self = this;
        if (this.templateUrl.length) {
            console.log('get template', this.templateUrl);
            var request = $.get(this.templateUrl, function (data){
                self.template = _.template(data);
                self.render();
            }, 'html');
        }
        if (typeof this['onInitialize'] == 'function') {
            this['onInitialize'].call(this);
        }
    },

    render: function () {

        if (!this.template) {
            return false;
        }

        var html = this.template();
        this.$el.html(html);

        if (typeof this['onRender'] == 'function') {
            this['onRender'].call(this);
        }

        return this;
    }
});