sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("iitp.zui52415.controller.View1", {
			onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData("/model/data.json");
                this.getView().setModel (oModel);
			},
            onCarrier: function(oEvent) {
                let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                this.byId("idConnTable").bindElement(sPath);
                //Carriers 테이블과 idConnTable 테이블을 연결하는 펑션 
            },
            onCarrier2: function(oEvent) {
                // let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                this.byId("idPanel").bindElement(oEvent.getParameter("listItem").getBindingContext().getPath());
                this.byId("idPanel").setExpanded(true)
                //idConnTable과 패널 연결하는 펑션
            },
            onCarrier3: function(oEvent) {
                this.byId("idConnTable").bindElement(oEvent.getParameter("selectedItem").getBindingContext().getPath());
                // 콤보박스와 idConnTable연결하는 펑션
            }
		});
	});
