package main

import (
	"beer-mapper/app/presenter"
	"net/http"

	"github.com/gin-gonic/gin"
)

func setRouter(r *gin.Engine) {
	{
		r.GET("/", presenter.GetTop)
	}

	user := r.Group("/user")
	user.Use()
	{
		user.GET("/", func(ctx *gin.Context) {
			ctx.HTML(http.StatusOK, "user.html", gin.H{
				"title":   "Beer Mapper",
				"message": "飲んだビールを記録できるサイトです",
			})
		})
		user.GET("/mypage", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{
				"message": "user/mypage",
			})
		})
	}

	api := r.Group("/api")
	{
		api.GET("/", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{
				"message": "api",
			})
		})
	}
}
