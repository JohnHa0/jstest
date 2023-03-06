(window["webpackJsonp"] = window["webpackJsonp"] || [])
.push([
	["chunk-76a59054"], {
		"2d9b": function(t, e, i) {
			"use strict";
			i("9817")
		},
		7280: function(t, e, i) {
			"use strict";
			i.r(e);
			var s = function() {
					var t = this,
						e = t._self._c;
					return e("div", [e("div", {
						ref: "pictureurl",
						staticClass: "answer"
					}, [e("div", {
						staticClass: "my-question"
					}, [e("div", {
						staticClass: "my-date"
					}, [t.mindownTime < 10 ? e("span", [t._v(t._s(0))]) : t._e(), e("span", [t._v(t._s(t.mindownTime))]), e("span", [t._v(":")]), t.countdownTime < 10 ? e("span", [t._v(t._s(0))]) : t._e(), e("span", [t._v(t._s(t.countdownTime))])]), e("div", {
						staticClass: "my-current"
					}, [e("span", {
						staticClass: "title"
					}, [t._v("第")]), e("span", {
						staticClass: "data"
					}, [t._v(t._s(t.current + 1))]), e("span", {
						staticClass: "title"
					}, [t._v("题 共" + t._s(t.total) + "题")])])]), e("div", {
						staticClass: "question_box"
					}, t._l(t.questionArr, (function(i, s) {
						return e("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: s === t.current,
								expression: "index === current"
							}],
							key: "questionId" + s,
							staticClass: "question_box_options"
						}, [e("div", {
							staticClass: "question_box_options_title"
						}, [t._v(t._s(i ? "radio" === i.type ? "（单选）" : "multiSelect" === i.type ? "（多选）" : "" : "") + t._s(t.current + 1) + "、" + t._s(i.title))]), i.videoUrl ? e("video", {
							staticClass: "question-video",
							attrs: {
								src: i.videoUrl,
								loop: "",
								controls: ""
							}
						}) : t._e(), i.url ? e("img", {
							staticStyle: {
								width: "100%",
								padding: "5px",
								"margin-top": "5px"
							},
							attrs: {
								src: i.url
							}
						}) : t._e(), e("ul", {
							staticClass: "question_box_options_list"
						}, t._l(i.options, (function(s, n) {
							return e("li", {
								key: "options" + n,
								class: ["item", {
									"active-item-select": s.showSelect
								}, {
									"active-item-success": s.rightOption && s.isCorrect
								}, {
									"active-item-error": s.rightOption && !s.isCorrect
								}],
								on: {
									click: function(e) {
										!i.completeAnswer && t.selectOption(i, s)
									}
								}
							}, [e("span", {
								staticClass: "text"
							}, [t._v(t._s(t.numberList[n] + s.label))]), e("van-icon", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: s.rightOption && s.isCorrect,
									expression: "i.rightOption&&i.isCorrect"
								}],
								staticClass: "success-icon",
								attrs: {
									name: "success"
								}
							}), e("van-icon", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: s.rightOption && !s.isCorrect,
									expression: "i.rightOption&&!i.isCorrect"
								}],
								staticClass: "success-icon",
								attrs: {
									name: "cross"
								}
							})], 1)
						})), 0), i.answerMsg && i.yesNo ? e("div", {
							staticClass: "trueAnswerMsg"
						}, [t._v("回答正确 ")]) : t._e(), i.answerMsg && !i.yesNo ? e("div", {
							staticClass: "errAnswerMsg"
						}, [t._v("回答错误，正确答案为：" + t._s(i.answerMsg) + " ")]) : t._e()])
					})), 0), e("div", {
						staticClass: "btn"
					}, [t.current + 1 === t.total ? e("div", {
						staticClass: "btn_submit"
					}, [e("img", {
						attrs: {
							src: i("bd21")
						},
						on: {
							click: t.submitBtn
						}
					})]) : e("div", {
						staticClass: "btn_next"
					}, [e("img", {
						attrs: {
							src: i("f5a3")
						},
						on: {
							click: function(e) {
								return t.nextAnswer(1)
							}
						}
					})])])])])
				},
				n = [],
				r = (i("149f"), i("7c98")),
				o = {
					name: "Quiz",
					data() {
						return {
							total: 0,
							exactness: 0,
							current: 0,
							questionArr: [],
							numberList: ["A、", "B、", "C、", "D、", "E、", "F、", "G、"],
							isSubmit: !1,
							timeCount: 0,
							mindownTime: 0,
							countdownTime: 0,
							timer1: null,
							timer2: null,
							token: null,
							postData: {},
							startAnswerTime: ""
						}
					},
					created() {
						this.nextAnswer = Object(r["debounce"])(this.nextAnswer, 500), this.nextAnswer = Object(r["debounce"])(this.nextAnswer, 500), this.init()
					},
					mounted() {
						this.startCounting(), this.startAnswerTime = this.$dayjs()
							.format("YYYY-MM-DD HH:mm:ss"), this.$toast.loading({
								message: "加载中...",
								loadingType: "spinner",
								forbidClick: !0,
								mask: !0,
								duration: 1e3
							})
					},
					methods: {
						async init() {
							this.getToken()
						},
						async getToken() {
							let t = {};
							t.userid = this.$route.query.userid, t.activityid = this.$route.query.activityid;
							const e = await this.$api.getToken(t);
							this.token = e.token, this.getQuestionBank()
						},
						async getQuestionBank() {
							let t = this,
								e = {};
							e.token = this.token;
							let i = await this.$api.getConfigure(e),
								s = i.configure[0].data.pictureurl.iv || "../assets/images/bg.png";
							s && (this.$refs.pictureurl.style.background = `url(${s}) no-repeat center center`, this.$refs.pictureurl.style.backgroundSize = "100% 110%"), t.mindownTime = Number(i.configure[0].data.answerlength.iv), t.total = i.configure[0].data.answersnumber.iv;
							const n = await this.$api.getQuestionBank(e);
							alert('ddd')
							let r = n.question.map(t => {
								let e = [],
									i = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7"],
									s = [];
								t.data.tureanswer.iv.forEach(t => {
									e.push(t.value)
								});
								for (let n in t.data)
									if (i.includes(n) && t.data[n].iv) {
										let i = {
											id: n.replace("answer", ""),
											label: e.includes(n.replace("answer", ""))?'-----':t.data[n].iv,
											isCorrect: !!e.includes(n.replace("answer", "")),
											isSelected: !!e.includes(n.replace("answer", "")),//!1,
											showSelect: 1
										};
										s.push(i)
									} return {
									title: t.data.topic.iv,
									url: t.data.topicpictureurl.iv,
									videoUrl: t.data.video.iv && t.data.video.iv[0] ? t.data.video.iv[0].playUrl : "",
									options: s,
									type: "trueorfalse" === t.data.questiontype.iv[0].value || "singletopicselection" === t.data.questiontype.iv[0].value ? "radio" : "multiSelect"
								}
							});
							r = r.filter(t => t.options.length), this.randomQuestion(r, this.total)
						},
						randomQuestion(t, e = 5) {
							const i = [];

							function s(t, e) {
								return Math.random() > .5 ? -1 : 1
							}
							for (let n = 0; n < e; n++) {
								const e = Math.floor(Math.random() * t.length),
									n = t.splice(e, 1)[0];
								n.options.sort(s), i.push(n)
							}
							this.questionArr = i, setTimeout(() => {
								this.timepiece(), this.countdownTime = 59
							}, 1e3)
						},
						selectOption(t, e) {
							"radio" === t.type ? (t.options.forEach(t => {
								t.isSelected = !1, t.showSelect = !1
							}), e.isSelected = !0, e.showSelect = !0) : "multiSelect" === t.type && (e.isSelected = !e.isSelected, e.showSelect = !e.showSelect)
						},
						itemIsSelected() {
							const {
								options: t
							} = this.questionArr[this.current];
							return t.some(t => t.isSelected)
						},
						calcOptions(t) {
							let e = t.filter(t => t.isCorrect && t.isSelected),
								i = t.filter(t => t.isCorrect),
								s = t.filter(t => t.isSelected && !t.isCorrect),
								n = e.length === i.length && 0 == s.length;
							return n
						},
						async nextAnswer(t) {
							let e = this;
							if (0 == t) return this.current -= 1;
							if (!this.itemIsSelected() && 2 != t) return this.$toast("请先选择您的答案！");
							const i = this.questionArr[this.current],
								{
									options: s,
									type: n
								} = i;
							this.questionArr[this.current].completeAnswer;
							let r = !1;
							if (s.forEach(t => {
								t.showSelect = !1
							}), this.calcOptions(s)) {
								this.exactness += 1, r = !0;
								const t = s.filter(t => t.isCorrect);
								t.forEach(t => {
									this.$set(t, "rightOption", !0)
								})
							} else if ("radio" === n) {
								const t = s.filter(t => t.isSelected)[0];
								this.$set(t, "rightOption", !0)
							} else if ("multiSelect" === n) {
								const t = s.filter(t => t.isSelected);
								t.forEach(t => {
									this.$set(t, "rightOption", !0)
								})
							}
							1 === t ? setTimeout(() => {
								this.current += 1
							}, 10) : 2 === t && setTimeout(() => {
								this.handleSubmit()
							}, 10), this.$set(i, "completeAnswer", !0);
							let o = s.filter((t, e) => {
									if (t.isCorrect) return t.tit = e, t
								}),
								a = "";
							o.forEach(t => {
								a += e.numberList[Number(t.tit)]
							}), a && (a = a.slice(0, a.length - 1)), setTimeout(() => {
								this.$set(i, "answerMsg", a), this.$set(i, "yesNo", r)
							}, 10)
						},
						submitBtn() {
							this.nextAnswer(2)
						},
						handleSubmit() {
							if (!this.isSubmit) {
								this.isSubmit = !0;
								try {
									this.postAnswerData()
								} catch (t) {
									this.isSubmit = !1
								}
							}
						},
						async postAnswerData() {
							this.$toast.loading({
								message: "提交中...",
								loadingType: "spinner",
								forbidClick: !0,
								mask: !0,
								duration: 1e3
							});
							const t = {
								userid: this.$route.query.userid,
								token: this.token,
								time: this.timeCount,
								total: 20,
								exactness: 20
							};
							await this.$api.postAnswerData(t), this.handlerJump()
						},
						startCounting() {
							this.timeCount++, this.timer1 = setTimeout(() => {
								this.startCounting()
							}, 1e3)
						},
						timepiece() {
							if (0 === this.countdownTime)
								if (this.mindownTime > 0) this.mindownTime--, this.countdownTime = 60;
								else if (0 === this.mindownTime) return this.nextAnswer(2);
							this.countdownTime--, this.timer2 = setTimeout(() => {
								this.timepiece()
							}, 1e3)
						},
						handlerJump() {
							let t = "/packageA/page10090/page10090?params=%7B%7D&token=";
							t += this.token, wx.miniProgram.redirectTo({
								url: t
							})
						}
					},
					beforeDestroy() {
						clearTimeout(this.timer1), clearTimeout(this.timer2)
					}
				},
				a = o,
				c = (i("2d9b"), i("e607")),
				l = Object(c["a"])(a, s, n, !1, null, "0d370f56", null);
			e["default"] = l.exports
		},
		9817: function(t, e, i) {},
		bd21: function(t, e, i) {
			t.exports = i.p + "img/submit_btn.045c66bb.png"
		},
		f5a3: function(t, e, i) {
			t.exports = i.p + "img/next_btn.c7a95efa.png"
		}
	}
]);