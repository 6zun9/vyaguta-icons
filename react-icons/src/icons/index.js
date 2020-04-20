const path = require("path");

module.exports = {
  icons: [
    {
      id: "fi",
      name: "Feather",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "../../../../node_modules/feather-icons/dist/icons/*.svg"
          ),
          formatter: name => `Fi${name}`
        }
      ],
      projectUrl: "https://feathericons.com/",
      license: "MIT",
      licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE"
    },
    {
      id: "ui",
      name: "Unicons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "../../../../node_modules/@iconscout/unicons/svg/line/*.svg"
          ),
          formatter: name => `Ui${name}`
        }
      ],
      projectUrl: "https://iconscout.com/unicons",
      license: "Apache-2.0",
      licenseUrl: "https://github.com/Iconscout/unicons/blob/master/LICENSE"
    }
  ]
};
