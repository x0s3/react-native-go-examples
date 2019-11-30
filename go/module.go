package rnSample

import (
	"time"
)

func SyncSum(x int32, y int32) int32 {
	return x + y
}

func AsyncSum(x int32, y int32, sleepMs int) int32 {
	sumResult := make(chan int32)

	go func() {
		defer close(sumResult)

		// Simulate hard task action
		time.Sleep(time.Millisecond * time.Duration(sleepMs))
		sumResult <- SyncSum(x, y)
	}()

	// Return the value of our gochan
	return <-sumResult
}

func main() {
}
