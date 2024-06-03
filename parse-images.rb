require "pathname"
files, dirs = Pathname.glob(File.join("assets/images/blog/**/*", "**/*")).partition(&:file?)
files.each do |f|
  parts = f.each_filename.to_a
  text = '{% include blog-image.html image-name = "'
  text += "#{parts[-2]}/#{parts[-1]}"
  text += '" title = "omschrijving" %}'
  # puts '{% include blog-image.html image-name = " #{parts}/#{}"  title = "#{}" %}'
  puts text
end
