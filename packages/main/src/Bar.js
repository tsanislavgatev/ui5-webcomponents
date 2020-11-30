import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import BarTemplate from "./generated/templates/BarTemplate.lit.js";
import BarDesign from "./types/BarDesign.js";

// Styles
import BarCss from "./generated/themes/Bar.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-bar",
	properties: /** @lends sap.ui.webcomponents.main.Bar.prototype */ {
		/**
		 * Defines the <code>ui5-bar</code> design.
		 * @type {BarDesign}
		 * @defaultvalue "BottomBorder"
		 * @public
		 */
		design: {
			type: BarDesign,
			defaultValue: BarDesign.BottomBorder
		},
		/**
		 * Defines the <code>ui5-bar</code> design.
		 * <br><br>
		 * <b>Note:</b> Available options are "BottomBorder", "TopBorder", "AllBorders".
		 *
		 * @type {BarDesign}
		 * @defaultvalue "BottomBorder"
		 * @public
		 */
		design: {
			type: BarDesign,
			defaultValue: BarDesign.BottomBorder,
		},
		/**
		 * 
		 */
		style: {
			type: String,
		}
	},
	slots: /** @lends sap.ui.webcomponents.main.Bar.prototype */ {
		/**
		 * @type {HTMLElement[]}
		 * @slot
		 * @since 1.0.0-rc.11
		 * @public
		 */
		leftContent: {
			type: HTMLElement,
		},
		/**
		 * @type {HTMLElement[]}
		 * @slot
		 * @since 1.0.0-rc.11
		 * @public
		 */
		middleContent: {
			type: HTMLElement,
		},
		/**
		 * @type {HTMLElement[]}
		 * @slot
		 * @since 1.0.0-rc.11
		 * @public
		 */
		rightContent: {
			type: HTMLElement,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Bar.prototype */ {
		//
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-bar</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/Bar.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Bar
 * @extends UI5Element
 * @tagname ui5-bar
 * @public
 */
class Bar extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return BarCss;
	}

	static get template() {
		return BarTemplate;
	}

	static get dependencies() {
		return [];
	}

	static async onDefine() {

	}

	// onAfterRendering() {
	// 	const slots = this.children;
	// 	for (let i = 0; i < slots.length; i++) {
	// 		const currentSlotChildren = slots[i].children;
	// 		for (let j = 0; j < currentSlotChildren.length; j++) {
	// 			currentSlotChildren[j].classList.add("slotChild");
	// 			currentSlotChildren[j].setAttribute("slotChild", "");
	// 		}
	// 	}
	// }

	get classes() {
		return {
			root: {
				"ui5-bar" : true,
				"ui5-bar-design-bottomborder" : this.design === BarDesign.BottomBorder,
				"ui5-bar-design-topborder" : this.design === BarDesign.TopBorder,
				"ui5-bar-design-allborders" : this.design === BarDesign.AllBorders,
			},
		};
	}

	get innerStyles() {
		return this.getAttribute("style");
	}
}

Bar.define();

export default Bar;