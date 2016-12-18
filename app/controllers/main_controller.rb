class MainController < ApplicationController
	def portfolio

	end

	def about
	end

	def download
		send_file(
			"#{Rails.root}/public/coultonbunney_resume_oct2014.pdf",
			filename: "coultonbunney_resume.pdf",
			type: "application/pdf"
			)
	end

	def casestudy1 

	end

	def casestudy2

	end

end
