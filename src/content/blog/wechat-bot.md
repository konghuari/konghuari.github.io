---
title: "微信 bot 怎么搞"
description: "个人微信没有官方 API，但 iLink bot 可以用。"
date: 2026-05-15
tags: ["WeChat", "Bot", "iLink"]
---

## 现实

腾讯从来没给个人微信开放过任何官方 API。所有能在个人微信里跑的 bot 都是逆向协议，**有封号风险**。

## iLink 是什么

iLink 是腾讯给企业/教育/政务账号的 bot 平台，但**实际验证**：个人微信也能用 iLink 扫码登录一个"iLink bot 身份"。

## 怎么用

1. 注册 Hermes Agent 之类的支持 iLink 的工具
2. 跑 `hermes gateway setup` 选 Weixin
3. 扫码 → 手机上确认
4. bot 就活了

## 注意

- **必须用备用号** —— iLink 是非公开接口，腾讯可能封号
- bot 身份**不能进普通微信群**，只能收 DM
- DM 策略默认 deny，需要显式打开
