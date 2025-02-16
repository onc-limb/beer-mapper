package main

import "github.com/gin-gonic/gin"

func setRouter(r *gin.Engine) {
	{
		r.GET("/", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{
				"message": "top",
			})
		})
	}

	user := r.Group("/user")
	user.Use()
	{
		user.GET("/", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{
				"message": "user",
			})
		})
		user.GET("/mypage", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{
				"message": "user/mypage",
			})
		})
	}
}
