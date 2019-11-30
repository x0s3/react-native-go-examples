package rnSample

import "testing"

func TestSyncSum(t *testing.T) {
	resultSum := SyncSum(2, 2)

	if resultSum != 4 {
		t.Errorf("SyncSum was incorrect, got: %d, want: %d.", resultSum, 4)
	}
}

func TestAsyncSum(t *testing.T) {
	resultSum := AsyncSum(2, 2, 2000)

	if resultSum != 4 {
		t.Errorf("AsyncSum was incorrect, got: %d, want: %d.", resultSum, 4)
	}
}
