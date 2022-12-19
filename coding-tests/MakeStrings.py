# Google
def makeStrings(s: str, L: int):
  
	res = set()
	tmp = ""
	N = len(s)
	
	def backtrack(tmp, index):

		nonlocal N, L
    
		if index >= N or len(tmp) >= L:
			res.add(tmp)
			return
    	
		tmp += s[index]    
   
		for i in range(N):         
			backtrack(tmp, i)
		
	for i in range(N):  
		backtrack("", i)
		
	return res

res = makeStrings("abc", 2)
print(res)