const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
	config: {
		name: "dpc",
		aliases: ["dpc",],
		version: "1.0",
		author: "ShAn",
		countDown: 5,
		role: 0,
		shortDescription: "send you a girl photos",
		longDescription: "",
		category: "𝗜𝗠𝗔𝗚𝗘",
		guide: "{pn}"
	},

	onStart: async function ({ api, event, message }) {
	api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
	 var link = [
"https://i.postimg.cc/D0s301Vm/FB-IMG-1738905549016.jpg",
"https://i.postimg.cc/vHFdj29n/FB-IMG-1738905551745.jpg",
"https://i.postimg.cc/d01MdbMb/FB-IMG-1738905554232.jpg",
"https://i.postimg.cc/g2Gbcwgk/FB-IMG-1738905556675.jpg",
"https://i.postimg.cc/G3DWkPNm/FB-IMG-1738905563861.jpg",
"https://i.postimg.cc/BQGdNL9c/FB-IMG-1738905566371.jpg",
"https://i.postimg.cc/0yXVmRyM/FB-IMG-1738862968044.jpg",
"https://i.postimg.cc/8zzyjPNg/FB-IMG-1739032498604.jpg",
"https://i.postimg.cc/kMNwst5d/FB-IMG-1739201684579.jpg",
"https://i.postimg.cc/HLf3Zw5T/FB-IMG-1739201689289.jpg",
"https://i.postimg.cc/zBK79ySK/FB-IMG-1739201694912.jpg",
"https://i.postimg.cc/Y07RktbV/FB-IMG-1739201699868.jpg",
"https://i.postimg.cc/wMkVjnrB/FB-IMG-1739201704816.jpg",
"https://i.postimg.cc/wBTz2tNb/FB-IMG-1738905569031.jpg",
"https://i.postimg.cc/qMsddcX5/FB-IMG-1738862528939.jpg",
"https://i.postimg.cc/FRMwM1fv/FB-IMG-1738862816522.jpg",
"https://i.postimg.cc/rpYB9fMK/FB-IMG-1738862818902.jpg",
"https://i.postimg.cc/HkYFDqLr/FB-IMG-1738862821363.jpg",
"https://i.postimg.cc/3N2zY7pv/FB-IMG-1738862826484.jpg",
"https://i.postimg.cc/762WnDKW/FB-IMG-1738862828936.jpg",
"https://i.postimg.cc/ZYySwz9Z/FB-IMG-1738862833951.jpg",
"https://i.postimg.cc/632DbCpz/FB-IMG-1738863157502.jpg",
"https://i.postimg.cc/13Mh89d0/FB-IMG-1738863159510.jpg",
"https://i.postimg.cc/d0DXDGrv/FB-IMG-1738863174577.jpg",
"https://i.postimg.cc/Sxg3ygXD/FB-IMG-1738905541409.jpg",
"https://i.postimg.cc/qqHZmYYM/FB-IMG-1738905543767.jpg",
"https://i.postimg.cc/8C3Yvsmv/FB-IMG-1738905546416.jpg",
"https://i.postimg.cc/zvmJ6RV2/FB-IMG-1716311906632.jpg",
"https://i.postimg.cc/fWXWX5rG/FB-IMG-1737933162958.jpg",
"https://i.postimg.cc/zvnJrXhz/FB-IMG-1737933169280.jpg",
"https://i.postimg.cc/yNdYZHMj/FB-IMG-1737933174983.jpg",
"https://i.postimg.cc/76JHKNYT/FB-IMG-1737933180261.jpg",
"https://i.postimg.cc/0NB5G4xs/FB-IMG-1737933185762.jpg",
"https://i.postimg.cc/j5SN2mcY/IMG-20250130-133538.jpg",
"https://i.postimg.cc/pdZz2RDB/IMG-20250130-133656.jpg",
"https://i.postimg.cc/TPGnMpWw/IMG-20250130-133806.jpg",
"https://i.postimg.cc/CxCfNS6V/FB-IMG-1737932447128.jpg",
"https://i.postimg.cc/MKtvxZnJ/FB-IMG-1738610233019.jpg",
"https://i.postimg.cc/bwBrD606/FB-IMG-1738610235689.jpg",
"https://i.postimg.cc/Gm29p0D8/FB-IMG-1738610237819.jpg",
"https://i.postimg.cc/zBmfpVcK/FB-IMG-1738610240300.jpg",
"https://i.postimg.cc/hGQj99pK/FB-IMG-1738610242557.jpg",
"https://i.postimg.cc/SRFzXZ40/FB-IMG-1738610245166.jpg",
"https://i.postimg.cc/mDFH2v0N/FB-IMG-1738610247212.jpg",
"https://i.postimg.cc/9QFwqR6f/FB-IMG-1738610364005.jpg",
"https://i.postimg.cc/s2bM8nvB/FB-IMG-1738610373621.jpg",
"https://i.postimg.cc/R0W3grV5/FB-IMG-1738610375870.jpg",
"https://i.postimg.cc/zvF3y8pW/FB-IMG-1738610378996.jpg",
"https://i.postimg.cc/Y9gvw1Wd/FB-IMG-1738610382002.jpg",
"https://i.postimg.cc/RVvNjJVT/FB-IMG-1738610384160.jpg",
"https://i.postimg.cc/MZ7nPmxT/FB-IMG-1738610386183.jpg",
"https://i.postimg.cc/h4TmFq8K/FB-IMG-1738610402412.jpg",
"https://i.postimg.cc/5NJCbkpL/FB-IMG-1738610404433.jpg",
"https://i.postimg.cc/5yBQ8w9X/FB-IMG-1738610407807.jpg",
"https://i.postimg.cc/Qd49gNDJ/FB-IMG-1738610411060.jpg",
"https://i.postimg.cc/9FBqMtNS/FB-IMG-1738610413133.jpg",
"https://i.postimg.cc/rskKyKGM/FB-IMG-1738610415778.jpg",
"https://i.postimg.cc/zvF3y8pW/FB-IMG-1738610378996.jpg",
"https://i.postimg.cc/QCywkW6r/FB-IMG-1738610073351.jpg",
"https://i.postimg.cc/VLJ3sD6s/FB-IMG-1738610076216.jpg",
"https://i.postimg.cc/RCskzjvb/FB-IMG-1738610078828.jpg",
"https://i.postimg.cc/28gg1hbQ/FB-IMG-1738610081288.jpg",
"https://i.postimg.cc/mgMJCkC0/FB-IMG-1738610084795.jpg",
"https://i.postimg.cc/6QXS0KhT/FB-IMG-1738610087504.jpg",
"https://i.postimg.cc/tJx3yXJj/FB-IMG-1738610073351.jpg",
"https://i.postimg.cc/1RncDKHj/FB-IMG-1738610076216.jpg",
"https://i.postimg.cc/Fs0yBswb/FB-IMG-1738610078828.jpg",
"https://i.postimg.cc/xjwG5bpT/FB-IMG-1738610081288.jpg",
"https://i.postimg.cc/YCk6KBw5/FB-IMG-1738610084795.jpg",
"https://i.postimg.cc/jjBCTy7D/FB-IMG-1738609460994.jpg",
"https://i.postimg.cc/PrdJdXPQ/FB-IMG-1738609466574.jpg",
"https://i.postimg.cc/3NFw26bG/FB-IMG-1738609469898.jpg",
"https://i.postimg.cc/XYQyRZL5/FB-IMG-1738609474846.jpg",
"https://i.postimg.cc/YCpWDN6k/FB-IMG-1738609478457.jpg",
"https://i.postimg.cc/3NXknWWd/FB-IMG-1738609483724.jpg",
"https://i.postimg.cc/XqSZf9jR/FB-IMG-1738609488689.jpg",
"https://i.postimg.cc/DycWGWtN/FB-IMG-1738609492900.jpg",
"https://i.postimg.cc/fTstk7gX/FB-IMG-1738609531031.jpg",
"https://i.postimg.cc/1358rmS3/FB-IMG-1738609534571.jpg",
"https://i.postimg.cc/fLXyRkcB/FB-IMG-1738609538185.jpg",
"https://i.postimg.cc/rwnKhByC/FB-IMG-1738609542195.jpg",
"https://i.postimg.cc/59BjcYNt/FB-IMG-1738609545904.jpg",
"https://i.postimg.cc/3NTR4797/FB-IMG-1738609550140.jpg",
"https://i.postimg.cc/3wNDYKfc/FB-IMG-1738609553598.jpg",
"https://i.postimg.cc/GpfTpZZh/FB-IMG-1738609559199.jpg",
"https://i.postimg.cc/QN1KXYSh/FB-IMG-1738609562802.jpg",
"https://i.postimg.cc/W3JFq5vm/FB-IMG-1738609566567.jpg",
"https://i.postimg.cc/hP4DH25C/FB-IMG-1738609345295.jpg",
"https://i.postimg.cc/fWfW2GBt/FB-IMG-1738609348464.jpg",
"https://i.postimg.cc/xCrjhYwH/FB-IMG-1738609351777.jpg",
"https://i.postimg.cc/520tFs5H/FB-IMG-1738609356577.jpg",
"https://i.postimg.cc/CxQxCbJc/FB-IMG-1738609360761.jpg",
"https://i.postimg.cc/43HNWnSs/FB-IMG-1738609365004.jpg",
"https://i.postimg.cc/WzTNp8b1/FB-IMG-1738609370903.jpg",
"https://i.postimg.cc/50w9MTJr/FB-IMG-1738609375822.jpg",
"https://i.postimg.cc/fyCwVdJj/FB-IMG-1738609380099.jpg",
"https://i.postimg.cc/GpxSwxNQ/FB-IMG-1738609035633.jpg",
"https://i.postimg.cc/28Lc8DM3/FB-IMG-1738609039441.jpg",
"https://i.postimg.cc/4yqWbL7J/FB-IMG-1738609044745.jpg",
"https://i.postimg.cc/QMh0bWtW/FB-IMG-1738609049738.jpg",
"https://i.postimg.cc/0ygtz41n/FB-IMG-1738609053637.jpg",
"https://i.postimg.cc/FKpGnsdC/FB-IMG-1738609059423.jpg",
"https://i.postimg.cc/V67G5Lz0/FB-IMG-1738609165300.jpg",
"https://i.postimg.cc/26j9zBNf/FB-IMG-1738609170568.jpg",
"https://i.postimg.cc/9XnghMxv/FB-IMG-1738609174924.jpg",
"https://i.postimg.cc/ZnCfNtq7/FB-IMG-1738609180170.jpg",
"https://i.postimg.cc/ht92T0SB/FB-IMG-1738609187162.jpg",
"https://i.postimg.cc/vH4jg9gY/FB-IMG-1738609191549.jpg",
"https://i.postimg.cc/CL92j1kj/FB-IMG-1738609196025.jpg",
"https://i.postimg.cc/DzTYMMC0/FB-IMG-1738609200582.jpg",
"https://i.postimg.cc/2SvKTD7g/FB-IMG-1738609204916.jpg",
"https://i.postimg.cc/90b7cr2s/FB-IMG-1738608806356.jpg",
"https://i.postimg.cc/DyfGBddh/FB-IMG-1738608810327.jpg",
"https://i.postimg.cc/sDnh8Qwh/FB-IMG-1738608813556.jpg",
"https://i.postimg.cc/vmnxcPMr/FB-IMG-1738608816747.jpg",
"https://i.postimg.cc/k4d68xXk/FB-IMG-1738608820329.jpg",
"https://i.postimg.cc/KcDLPsTQ/FB-IMG-1738608975941.jpg",
"https://i.postimg.cc/132NRxxR/FB-IMG-1738608980279.jpg",
"https://i.postimg.cc/K8RMyGHs/FB-IMG-1738608984382.jpg",
"https://i.postimg.cc/zfHKTzwR/FB-IMG-1738608988039.jpg",
"https://i.postimg.cc/C5S8yb3j/FB-IMG-1738608991987.jpg",
"https://i.postimg.cc/fL4XKG5q/FB-IMG-1738608999424.jpg",
"https://i.postimg.cc/XJw5Dszj/FB-IMG-1738609012396.jpg",
"https://i.postimg.cc/pTxryRsv/FB-IMG-1738437104144.jpg",
"https://i.postimg.cc/6qpQLzs1/FB-IMG-1738437200646.jpg",
"https://i.postimg.cc/rFYDg6wG/FB-IMG-1738563572069.jpg",
"https://i.postimg.cc/285q4jr8/FB-IMG-1738563578748.jpg",
"https://i.postimg.cc/htzf5CXk/FB-IMG-1738563588668.jpg",
"https://i.postimg.cc/66c224sm/FB-IMG-1738563594438.jpg",
"https://i.postimg.cc/MTDTQNLQ/FB-IMG-1738563603226.jpg",
"https://i.postimg.cc/sgkvdpSv/FB-IMG-1738563609022.jpg"]

let img = link[Math.floor(Math.random()*link.length)]
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
message.send({
	body: '「 EI NAW TMR DPZ😎  」',attachment: await global.utils.getStreamFromURL(img)
})
}
 }
const wrapper = new GoatWrapper(module.exports);
    wrapper.applyNoPrefix({ allowPrefix: true });
