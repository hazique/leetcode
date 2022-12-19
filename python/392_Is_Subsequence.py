# Difficulty: Easy
# URL: https://leetcode.com/problems/is-subsequence/description/

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        
        sPtr, tPtr = 0, 0
        S = len(s)
        T = len(t)

        while sPtr < S:
            while tPtr < T:
                if s[sPtr] == t[tPtr]:
                    tPtr += 1
                    break

                tPtr += 1

            else:
                return False
            
            sPtr += 1

        return True    