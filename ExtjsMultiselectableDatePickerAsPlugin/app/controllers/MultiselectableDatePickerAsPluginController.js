Ext.define('ExtjsExamples.controllers.MultiselectableDatePickerAsPluginController', {
    extend: 'Ext.app.Controller',
    viewInstance: null,
    launch: function () {
        var me = this;
        me.viewInstance = Ext.create('ExtjsExamples.views.MultiselectableDatePickerAsPluginView');
    },

    getView: function() {
        var me = this;
        return me.viewInstance;
    }
});