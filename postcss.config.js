module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-nesting"),
		require("postcss-apply"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("autoprefixer"),
		require("postcss-preset-env")({
			stage: 1,
		}),
		require("postcss-apply"),
		// require("precss"),
		require("postcss-simple-vars")({
			variables: {
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
				containerWidthLg: "80%",
				containerWidthMd: "90%",
				containerWidthSm: "94%",
				transition: "all 400ms ease",
			},
		}),
	],
};
