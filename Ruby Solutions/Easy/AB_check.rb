# AB_check.rb
# splashinn

#Determine if two characters are separated a specific way in the string - return true if characters a and b are separated by exactly 3 places. 
def abCheck(str)
	return false if(str.include?('a') == false || str.include?('b') == false || str.rindex('b') < str.rindex('a'))
	return str.rindex('b') - str.rindex('a') == 4
	
end

p abCheck("bzzza") #false
p abCheck("after badly") #false
p abCheck("Laura sobs") #true
p abCheck("aaaaddddd") #false