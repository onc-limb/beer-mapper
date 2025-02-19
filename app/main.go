package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("app/views/**/*.html")
	setRouter(r)
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Health check is OK.",
		})
	})
	r.Run() // 0.0.0.0:8080 でサーバーを立てます。
}
