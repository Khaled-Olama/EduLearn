module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				colorPrimary: "#6c63ff",
				colorSuccess: "#00bf8e",
				colorWarning: "#f7c94b",
				colorDanger: "#f75842",
				colorDangerVariant: "rbga(247, 88, 66, 0.4)",
				colorWhite: "#fff",
				colorLight: "rgba(255, 255, 255, 0.7)",
				colorBlack: "#000",
				colorBg: "#1f2641",
				colorBg1: "#2e3267",
				colorBg2: "#424890",
			},
			container: {
				containerWidthLg: "80%",
				containerWidthMd: "90%",
				containerWidthSm: "94%",
			},
			transitionProperty: {
				transition: "all 400ms ease",
			},
		},
	},
	plugins: [],
};
