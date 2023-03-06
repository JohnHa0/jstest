alert('dd')
(window["webpackJsonp"] = window["webpackJsonp"] || [])
.push([
	["chunk-2420404d"], {
		"10a8": function(t, e, s) {
			"use strict";
			s("19f8")
		},
		"19f8": function(t, e, s) {},
		3803: function(t, e, s) {
			"use strict";
			s.r(e);
			var i = function() {
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
					}, t._l(t.questionArr, (function(s, i) {
						return e("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: i === t.current,
								expression: "index === current"
							}],
							key: "questionId" + i,
							staticClass: "question_box_options"
						}, [e("div", {
							staticClass: "question_box_options_title"
						}, [t._v(t._s(s ? "radio" === s.type ? "（单选）" : "multiSelect" === s.type ? "（多选）" : "" : "") + t._s(t.current + 1) + "、" + t._s(s.title))]), s.url ? e("img", {
							staticStyle: {
								width: "100%",
								padding: "5px",
								"margin-top": "5px"
							},
							attrs: {
								src: s.url
							}
						}) : t._e(), e("ul", {
							staticClass: "question_box_options_list"
						}, t._l(s.options, (function(i, n) {
							return e("li", {
								key: "options" + n,
								class: ["item", {
									"active-item-select": i.showSelect
								}, {
									"active-item-success": i.rightOption && i.isCorrect
								}, {
									"active-item-error": i.rightOption && !i.isCorrect
								}],
								on: {
									click: function(e) {
										!s.completeAnswer && t.selectOption(s, i)
									}
								}
							}, [e("span", {
								staticClass: "text"
							}, [t._v(t._s(t.numberList[n] + i.label))]), e("van-icon", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: i.rightOption && i.isCorrect,
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
									value: i.rightOption && !i.isCorrect,
									expression: "i.rightOption&&!i.isCorrect"
								}],
								staticClass: "success-icon",
								attrs: {
									name: "cross"
								}
							})], 1)
						})), 0), s.answerMsg && s.yesNo ? e("div", {
							staticClass: "trueAnswerMsg"
						}, [t._v("回答正确 ")]) : t._e(), s.answerMsg && !s.yesNo ? e("div", {
							staticClass: "errAnswerMsg"
						}, [t._v("回答错误，正确答案为：" + t._s(s.answerMsg) + " ")]) : t._e()])
					})), 0), e("div", {
						staticClass: "btn"
					}, [t.current > 0 ? e("button", {
						staticClass: "btn_up",
						on: {
							click: function(e) {
								return t.nextAnswer(0)
							}
						}
					}, [t._v("上一题")]) : t._e(), t.current + 1 === t.total ? e("button", {
						staticClass: "btn_submit",
						on: {
							click: t.submitBtn
						}
					}, [t._v("提交")]) : e("button", {
						staticClass: "btn_next",
						on: {
							click: function(e) {
								return t.nextAnswer(1)
							}
						}
					}, [t._v("下一题")])])])])
				},
				n = [],
				r = (s("149f"), s("7c98")),
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
							this.getQuestionBank()
						},
						async getQuestionBank() {
							let t = this,
								e = {};
							e.token = this.$route.query.token;
							let s = await this.$api.getConfigure(e),
								i = s.configure[0].data.pictureurl.iv || "../assets/images/bg.png";
							i && (this.$refs.pictureurl.style.background = `url(${i}) no-repeat center center`, this.$refs.pictureurl.style.backgroundSize = "100% 110%"), t.mindownTime = Number(s.configure[0].data.answerlength.iv), t.total = s.configure[0].data.answersnumber.iv;
							const n = await this.$api.getQuestionBank(e);
							alert('dddd')
							let r = n.question.map(t => {
								let e = [],
									s = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7"],
									i = [];
								t.data.tureanswer.iv.forEach(t => {
									e.push(t.value)
								});
								for (let n in t.data)
									if (s.includes(n) && t.data[n].iv) {
										let s = {
											id: n.replace("answer", ""),
											label: t.data[n].iv,
											isCorrect: !!e.includes(n.replace("answer", "")),
											isSelected: !!e.includes(n.replace("answer", "")),//!1,
											showSelect: 1
										};
										i.push(s)
									} return {
									title: t.data.topic.iv,
									url: t.data.topicpictureurl.iv,
									options: i,
									type: "trueorfalse" === t.data.questiontype.iv[0].value || "singletopicselection" === t.data.questiontype.iv[0].value ? "radio" : "multiSelect"
								}
							});
							r = r.filter(t => t.options.length), this.randomQuestion(r, this.total)
						},
						randomQuestion(t, e = 5) {
							const s = [];

							function i(t, e) {
								return Math.random() > .5 ? -1 : 1
							}
							for (let n = 0; n < e; n++) {
								const e = Math.floor(Math.random() * t.length),
									n = t.splice(e, 1)[0];
								n.options.sort(i), s.push(n)
							}
							this.questionArr = s, setTimeout(() => {
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
								s = t.filter(t => t.isCorrect),
								i = t.filter(t => t.isSelected && !t.isCorrect),
								n = e.length === s.length && 0 == i.length;
							return n
						},
						async nextAnswer(t) {
							let e = this;
							if (0 == t) return this.current -= 1;
							if (!this.itemIsSelected() && 2 != t) return this.$toast("请先选择您的答案！");
							const s = this.questionArr[this.current],
								{
									options: i,
									type: n
								} = s;
							this.questionArr[this.current].completeAnswer;
							let r = !1;
							if (i.forEach(t => {
								t.showSelect = !1
							}), this.calcOptions(i)) {
								this.exactness += 1, r = !0;
								const t = i.filter(t => t.isCorrect);
								t.forEach(t => {
									this.$set(t, "rightOption", !0)
								})
							} else if ("radio" === n) {
								const t = i.filter(t => t.isSelected)[0];
								this.$set(t, "rightOption", !0)
							} else if ("multiSelect" === n) {
								const t = i.filter(t => t.isSelected);
								t.forEach(t => {
									this.$set(t, "rightOption", !0)
								})
							}
							1 === t ? setTimeout(() => {
								this.current += 1
							}, 500) : 2 === t && setTimeout(() => {
								this.handleSubmit()
							}, 500), this.$set(s, "completeAnswer", !0);
							let o = i.filter((t, e) => {
									if (t.isCorrect) return t.tit = e, t
								}),
								a = "";
							o.forEach(t => {
								a += e.numberList[Number(t.tit)]
							}), a && (a = a.slice(0, a.length - 1)), setTimeout(() => {
								this.$set(s, "answerMsg", a), this.$set(s, "yesNo", r)
							}, 800)
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
								token: this.$route.query.token,
								time: this.timeCount,
								total: this.total,
								exactness: this.exactness
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
							let t = "/packageA/page10056/page10056?params=%7B%7D&token=";
							t += this.$route.query.token, wx.miniProgram.redirectTo({
								url: t
							})
						}
					},
					beforeDestroy() {
						clearTimeout(this.timer1), clearTimeout(this.timer2)
					}
				},
				a = o,
				c = (s("10a8"), s("e607")),
				u = Object(c["a"])(a, i, n, !1, null, "20a88534", null);
			e["default"] = u.exports
		}
	}
]);