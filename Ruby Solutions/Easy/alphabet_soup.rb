# alphabet_soup.rb
# splashinn

#sort characters in a string
def alphabetSoup(str)
	return str.split('').sort().join('')
end

p alphabetSoup("coderbyte")