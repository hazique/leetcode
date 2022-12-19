# Difficulty: Easy
# URL: https://leetcode.com/problems/isomorphic-strings/description/

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        
        s2t = {}
        t2s = {}

        for i in range(len(s)):

            # s[i] not in s2t and t[i] not in t2s
            if s[i] not in s2t and t[i] not in t2s:
                s2t[s[i]] = t[i]
                t2s[t[i]] = s[i]
                continue

            if (s[i] in s2t and s2t[s[i]] == t[i]) and (t[i] in t2s and t2s[t[i]] == s[i]):
                continue
            
            if (s[i] in s2t and s2t[s[i]] != t[i]) or (t[i] in t2s and t2s[t[i]] != s[i]):
                return False
        return True
