package presenter

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetTop(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "index.html", gin.H{
		"title":   "Beer Mapper",
		"message": "飲んだビールを記録できるサイトです",
	})
}
