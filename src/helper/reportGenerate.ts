
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/report/",
  reportPath: "./test-result/report/",
  metadata: {
    browser: {
      name: "Chrome",
      version: "124",
    },
    device: "Local test machine",
    platform: {
      name: "Window",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});
