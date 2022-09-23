<template>
	<div class="site-wrapper">

		<!--
            <div class="doc-loader">
                <img src="images/loading.webp" alt="LIGHTREEL Blockchain Platform">
            </div> -->
		<header class="header-holder">
			
			<div class="menu-wrapper center-relative relative">
				<div class="header-logo">
					<a href="index.html">
						<img src="/images/logo.webp" />
					</a>
				</div>

				<div class="toggle-holder">
					<div id="toggle">
						<div class="first-menu-line"></div>
						<div class="second-menu-line"></div>
						<div class="third-menu-line"></div>
					</div>
				</div>

				<div class="menu-holder">
					<nav id="header-main-menu">
						<ul class="main-menu sm sm-clean">
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#roadmap">Roadmap</a>
							</li>
							
							<li>
								<a href="#team">Team</a>
							</li>
							<li>
								<a href="#pricing">Membership</a>
							</li>
							<li>
								<a href="/Public-LightReel-Whitepaper.pdf">Whitepaper</a>
							</li>
						</ul>
					</nav>
					<connect-wallet></connect-wallet>
				</div>
				<div class="clear"></div>
			</div>
		</header>

		<div id="content" class="site-content center-relative">
			<!-- Home Section -->
			<div id="home" class="home section no-page-title">
				<div class="section-wrapper block content-1170 center-relative">
					<div class="content-wrapper">
						<img class="hero" src="images/hero.webp" />
						<img class="heromobile" src="images/heromobile.webp" />
						
					</div>
				</div>
				<canvas id="back"></canvas>
				
			</div>

			<!-- Services Section -->
			<div id="about" class="section">
				<div class="page-title-holder">
					<h3 class="entry-title">ABOUT</h3>
				</div>
				<div class="section-wrapper block content-1170 center-relative">
					<div class="content-wrapper">
						<div class="two_third">
							<p class="title-description-up">LightReel Is About</p>
							<h2 class="entry-title medium-text">
								Unlocking crowd<br />
								creativity.
							</h2>
							<p>
								A blockchain-based independent film fund powered by members of
								the community. Members give creative input on potential projects, pick films to get funded, and then actively review their
								production process live. LightReel enables film enthusiasts to participate in the development process
								of accredited, profit-producing film projects and receive rewards or private investment opportunities. As a curator on LightReel, you get to choose new
								film ideas to be tested; and break the creative molds used by
								legacy "Hollywood" film funds and studios.
							</p>
							<br />
							<div class="button-holder text-left">
								<a href="#pricing" class="button"> BECOME A CURATOR </a>
							</div>
						</div>

						<div
							class="one_third last"
							data-threshold="0 0"
							data-jarallax-element="100 0"
						>
							<img class="thumb" src="images/hand.webp" alt="" />
						</div>
<div class="posters-container">
						<h1 class="medium-text center">What makes LightReel different?</h1>
						<p>LightReel plans to help audiences engage with their entertainment at a higher level than ever before.</p>
						<div class="pricing-table-content-holder">
										<ul>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>Built with the goal of producing a revenue-generating real industry use-case for blockchain
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>Accredited team with many years of experience in the film and blockchain industries
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>Partnered with producers and studios that provide complete, vetted film packages with competitive talent (script, director, cast, and crew)
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>Long-term plans for sustainability of the platform and the film industry it supports
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>A perfect blend of community governance and centralized industry compatibility that is realistic to implement today
											</li>
										</ul>
									</div>
						<h2 class="center">Film projects included in the first round of funding:</h2>
						<p class="center"><i>Click the poster for more info!</i></p>	
						<div class="posters section-wrapper block content-1170 center">	
							<div class="one_third">
  						<div class="flip-card">
  							<div class="flip-card-inner">
   								 <div class="flip-card-front">
     							 <img src="/images/poster1.webp" alt="Pledge Trip">
    						</div>
    						<div class="flip-card-back">
      							<h2 class="center">Pledge Trip</h2>
	  							<h1 class="center">Comedy Starring Jake T Austin and Isabella Gomez</h1>
      							<p class="center">In a pursuit to belong, three college freshmen take off down a twisted, debauched, pride-busting road to brotherhood.</p>
    					</div>
 						 </div>
						</div>
						</div>
						<div class="one_third">
						<div class="flip-card">
  							<div class="flip-card-inner">
   								 <div class="flip-card-front">
     							 <img src="/images/poster2.webp" alt="Used Cars">
    						</div>
    						<div class="flip-card-back">
      							<h2 class="center">Used Cars</h2>
	  							<h1 class="center">Comedy by David Farese Films</h1>
      							<p class="center">A family-run used car dealership in Amarillo, Texas is constantly on the verge of collapse thanks to a cocky owner and a crew of misfit employees.</p>
    						</div>
 						 </div>
						</div>
						</div>
						<div class="one_third last">
						<div class="flip-card">
  							<div class="flip-card-inner">
   								 <div class="flip-card-front">
     							 <img src="/images/poster3.webp" alt="Three Loud Knocks">
    						</div>
    						<div class="flip-card-back">
      							<h2 class="center">Three Loud Knocks</h2>
	  							<h1 class="center">Horror by Scatter Brothers Productions</h1>
      							<p class="center">In Southern Georgia, Ollie Oliver has spent his entire life believing that he is destined to die a little every day. What he doesn't know yet is that his reality, is not real.</p>
				
    						</div>
 						 </div>
						</div>
						</div>
							</div>					
						</div>
						<h2 class="center">And more to come...</h2>	
						<div class="clear"></div>
					</div>
				</div>
			</div>
			
			<!-- About Section -->
			<div id="roadmap" class="section">
				<div class="page-title-holder">
					<h3 class="entry-title">ROADMAP</h3>
				</div>
				<div class="section-wrapper block content-1170 center-relative">
					<div class="content-wrapper">
						<div class="one_third">
							<div class="service-holder">
								<p class="service-num">1</p>
								<div class="service-txt">
									<h4>Signup</h4>
									<p>
										Future-Curators access a public mint event for 24 hours. After that event, no more "Founder Membership Tier" NFTs will be minted. Every LightReel "Founder Membership Tier" NFT represents a transferrable lifetime
										membership to the LightReel site and features. NFT holders will have exclusive
										access to platform benefits such as participation
										rewards, private investment opportunities, and behind-the-scenes content.
									</p>
									<h4>March 2022</h4>
									<br />
									
								</div>
							</div>
						</div>

						<div class="one_third">
							<div class="service-holder">
								<p class="service-num">2</p>
								<div class="service-txt">
									<h4>Develop</h4>
									<p>
										The shortlist of projects for the first round of funding is finalized. A greenlight process is beta-tested with Founding Members, and one
										or multiple films are put into production based on funding levels. Curators then engage
										with the productions through development updates and reviews.
										Curators can get access to exclusive content such as teasers and collectibles related to the projects.
									</p>
									<h4>May 2022</h4>
									<br />
								</div>
							</div>
						</div>

						<div class="one_third last">
							<div class="service-holder">
								<p class="service-num">3</p>
								<div class="service-txt">
									<h4>Launch</h4>
									<p>
										LightReel will release the platform after the beta-test is complete. After launch, LightReel's team will pursue compliance to allow private investment from Founding Members. Revenues from the previous rounds are earmarked for the next round of projects. By combining community opinion with
										real-world analytics and marketing algorithms, the movie
										development process gets more effective with every
										production!

									</p>
									<h4>Late 2022</h4>
									<br />
									
								</div>
							</div>
						</div>
						<img src="/images/early.webp">
						<div class="clear"></div>
						
					</div>
					
				</div>
			</div>
<!-- Team Section -->
		<div id="team" class="section">
			<div class="page-title-holder">
				<h3 class="entry-title">TEAM</h3>
			</div>
			<div class="section-wrapper block content-1170 center-relative">
				<div class="content-wrapper">
					<div class="member member-left">
						<img
							class="johnhall"
							src="images/johnhall.webp"
							alt=""
							data-threshold="0 0"
							data-jarallax-element="60 0"
						/>
						<div class="member-info">
							<h5 class="member-name">John C. Hall</h5>
							<div class="member-content">
								<p>
									John C. Hall is LightReel's creative producer. He is a film, television, and theatrical producer as well as a published author. 
									Most recently, he served as Executive Vice President of Distribution & Marketing at Universal Pictures.
									 His tenure in entertainment has seen him working on the marketing and distribution campaigns for over 
									 375 theatrical releases, including major franchise titles, Oscar® winners, and dozens of mega-blockbusters.
								</p>
								<div class="member-social-holder" data-jarallax-element="0 30">
									<div class="social">
										<a href="https://twitter.com/johnc_hall" target="_blank">
											<span class="fa fa-twitter"></span>
										</a>
									</div>
									<div class="social last">
										<a href="https://www.imdb.com/name/nm3288606/">
											<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width:30px;height:30px;vertical-align:middle;margin:0px 5px;"><path fill="currentColor" d="M22.378 0H1.622a1.721 1.721 0 0 0-1.62 1.595L0 22.378c.058.876.712 1.543 1.556 1.62a.337.337 0 0 0 .045.002h20.797a.458.458 0 0 0 .043-.002A1.723 1.723 0 0 0 24 22.29V1.71A1.72 1.72 0 0 0 22.415.002A.33.33 0 0 0 22.378 0zm0 .496a1.214 1.214 0 0 1 1.125 1.214v20.58c0 .637-.487 1.16-1.104 1.214H1.602a1.214 1.214 0 0 1-1.106-1.126V1.628A1.21 1.21 0 0 1 1.622.496h20.756zM4.795 8.26v7.364H2.89V8.26h1.905zm6.537 0v7.364H9.671v-4.97L9 15.623H7.813l-.699-4.862l-.006 4.862H5.44V8.26h2.468c.075.448.149.97.23 1.574l.272 1.871l.44-3.445h2.482zm2.977 1.33a.28.28 0 0 1 .142.203c.028.095.035.311.035.644v2.855c0 .488-.035.786-.096.895c-.06.115-.23.17-.502.17V9.52c.204 0 .346.02.421.068zm-.02 6.034c.454 0 .8-.027 1.024-.074c.23-.048.42-.136.57-.265a.961.961 0 0 0 .324-.522c.061-.224.102-.665.102-1.322v-2.584c0-.698-.027-1.166-.074-1.403a1.277 1.277 0 0 0-.313-.644c-.169-.197-.42-.333-.745-.421c-.32-.081-.854-.129-1.77-.129h-1.424v7.364h2.305zm5.14-1.783c0 .353-.02.576-.055.671c-.033.095-.19.142-.305.142c-.108 0-.19-.047-.224-.135c-.04-.088-.06-.298-.06-.623v-1.947c0-.333.02-.543.054-.624c.034-.08.108-.122.217-.122c.115 0 .27.041.311.142c.041.095.061.299.061.604v1.892zm-2.475-5.58v7.363h1.715l.115-.468c.156.19.326.333.516.428c.182.088.46.135.678.135c.304 0 .563-.075.78-.237a1.05 1.05 0 0 0 .42-.563c.054-.217.088-.543.088-.984v-2.067a7.2 7.2 0 0 0-.034-.868a1.025 1.025 0 0 0-.17-.42a1.013 1.013 0 0 0-.427-.333a1.929 1.929 0 0 0-1.342.013a1.629 1.629 0 0 0-.509.4v-2.4h-1.83z"/></svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					

					<br />

					<div class="member big-screen member-right">
						<div class="member-info">
							<h5 class="member-name">Wes Keane</h5>
							<div class="member-content">
								<p>
										Wes Keane is a software engineer consultant at JAG Consulting, LLC.
										Since buying his first bitcoin in 2012, Wes has been active in the blockchain 
										movement and believes in the potential of the technology. For the last five years, he has been 
										focused on applying blockchain use-case to real-world industries 
										and show the potential for a positive future. 
								</p>
								<div class="member-social-holder" data-jarallax-element="0 -30">
									<div class="social last">
										<a href="https://twitter.com/ok_nice_meme" target="_blank">
											<span class="fa fa-twitter"></span>
										</a>
									</div>
									
								</div>
							</div>
						</div>
						<img
							class="wes"
							src="images/wes.webp"
							alt=""
							data-threshold="0 0"
							data-jarallax-element="60 0"
						/>
					</div>

					<br />
<div class="member member-left">
						<img
							class="howell"
							src="images/howell.webp"
							alt=""
							data-threshold="0 0"
							data-jarallax-element="60 0"
						/>
						<div class="member-info">
							<h5 class="member-name">Howell Upchurch</h5>
							<div class="member-content">
								<p>
									Howell Upchurch is the co-founder
									and head of development for
									Centaurus Entertainment, LLC,
									an entertainment
									development company based in Atlanta, GA. As an award-winning producer for
									more than 25 years, Howell has
									produced and directed nationally
									acclaimed film and video
									programs, establishing a strong reputation for
									production and project development excellence.
								</p>
								<div class="member-social-holder" data-jarallax-element="0 30">
									<div class="social last">
										<a href="https://www.imdb.com/name/nm0994443/">
											<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width:30px;height:30px;vertical-align:middle;margin:0px 5px;"><path fill="currentColor" d="M22.378 0H1.622a1.721 1.721 0 0 0-1.62 1.595L0 22.378c.058.876.712 1.543 1.556 1.62a.337.337 0 0 0 .045.002h20.797a.458.458 0 0 0 .043-.002A1.723 1.723 0 0 0 24 22.29V1.71A1.72 1.72 0 0 0 22.415.002A.33.33 0 0 0 22.378 0zm0 .496a1.214 1.214 0 0 1 1.125 1.214v20.58c0 .637-.487 1.16-1.104 1.214H1.602a1.214 1.214 0 0 1-1.106-1.126V1.628A1.21 1.21 0 0 1 1.622.496h20.756zM4.795 8.26v7.364H2.89V8.26h1.905zm6.537 0v7.364H9.671v-4.97L9 15.623H7.813l-.699-4.862l-.006 4.862H5.44V8.26h2.468c.075.448.149.97.23 1.574l.272 1.871l.44-3.445h2.482zm2.977 1.33a.28.28 0 0 1 .142.203c.028.095.035.311.035.644v2.855c0 .488-.035.786-.096.895c-.06.115-.23.17-.502.17V9.52c.204 0 .346.02.421.068zm-.02 6.034c.454 0 .8-.027 1.024-.074c.23-.048.42-.136.57-.265a.961.961 0 0 0 .324-.522c.061-.224.102-.665.102-1.322v-2.584c0-.698-.027-1.166-.074-1.403a1.277 1.277 0 0 0-.313-.644c-.169-.197-.42-.333-.745-.421c-.32-.081-.854-.129-1.77-.129h-1.424v7.364h2.305zm5.14-1.783c0 .353-.02.576-.055.671c-.033.095-.19.142-.305.142c-.108 0-.19-.047-.224-.135c-.04-.088-.06-.298-.06-.623v-1.947c0-.333.02-.543.054-.624c.034-.08.108-.122.217-.122c.115 0 .27.041.311.142c.041.095.061.299.061.604v1.892zm-2.475-5.58v7.363h1.715l.115-.468c.156.19.326.333.516.428c.182.088.46.135.678.135c.304 0 .563-.075.78-.237a1.05 1.05 0 0 0 .42-.563c.054-.217.088-.543.088-.984v-2.067a7.2 7.2 0 0 0-.034-.868a1.025 1.025 0 0 0-.17-.42a1.013 1.013 0 0 0-.427-.333a1.929 1.929 0 0 0-1.342.013a1.629 1.629 0 0 0-.509.4v-2.4h-1.83z"/></svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<br />
					<div class="member big-screen member-right">
						<div class="member-info">
							<h5 class="member-name">Samantha Paustian</h5>
							<div class="member-content">
								<p>
										Samantha is LightReel's community manager, playing a vital part in the growth 
										and maintenance of LightReel's online presence and social spaces. She brings the 
										public's opinions to the table and keeps us all on our P's and Q's. In the future, 
										she plans to coordinate production on member content such as live virtual set tours and development interviews.
								</p>
								<div class="member-social-holder" data-jarallax-element="0 -30">
									<div class="social last">
										<a href="https://www.instagram.com/smmyjo/" target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" style="width:30px;height:30px;vertical-align:middle;margin:0px 5px;">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
						<img
							class="wes"
							src="images/sam.webp"
							alt=""
							data-threshold="0 0"
							data-jarallax-element="60 0"
						/>
					</div>
					<br />
					<div class="member member-left">
						<img
							class="johnhall"
							src="images/mark.webp"
							alt=""
							data-threshold="0 0"
							data-jarallax-element="60 0"
						/>
						<div class="member-info">
							<h5 class="member-name">Mark Minkoff</h5>
							<div class="member-content">
								<p>
									Mark is a software engineer with a degree in Computer and Data Science. Mark specializes in advanced data manipulation through machine learning. He is an experienced full-stack developer who has worked with previous startups and aims to create an impact for social change.
								</p>
								<div class="member-social-holder" data-jarallax-element="0 30">
									<div class="social last">
										<a href="https://twitter.com/mark_minkoff" target="_blank">
											<span class="fa fa-twitter"></span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<div class="others center">
					<h2 class="entry-title medium-text center">
								Plus many more talented creatives from LightReel producing partners and their projects.
					</h2>
						<img src="/images/team/1.webp"/>
						<img src="/images/team/2.webp"/>
						<img src="/images/team/3.webp"/>
						<img src="/images/team/4.webp"/>
						<img src="/images/team/5.webp"/>
						<img src="/images/team/6.webp"/>
						<img src="/images/team/7.webp"/>
						<img src="/images/team/8.webp"/>
						<img src="/images/team/9.webp"/>
						<img src="/images/team/10.webp"/>
						<img src="/images/team/11.webp"/>
						<img src="/images/team/12.webp"/>
						<img src="/images/team/13.webp"/>
						<img src="/images/team/14.webp"/>
						<img src="/images/team/15.webp"/>
						<img src="/images/team/16.webp"/>
						<img src="/images/team/17.webp"/>
						<img src="/images/team/18.webp"/>
					</div>
				</div>
			</div>
		</div>
			<!-- Pricing Section -->
			<div id="pricing" class="section">
				<div class="page-title-holder">
					<h3 class="entry-title">MEMBERS</h3>
				</div>
				<div class="section-wrapper block content-1170 center-relative">
					<div class="content-wrapper">
						<div class="one_half">
							<div class="pricing-table">
								<p class="pricing-num">🎉</p>
								<div class="pricing-wrapper">
									<div class="pricing-table-header">
										<div class="pricing-table-title">NFT Details:</div>
									</div>
									<div class="pricing-table-title">"FOUNDER <br /> MEMBERSHIP"</div>
									<br />
									<div class="pricing-table-price">0.20 ETH</div>
									<div class="pricing-table-desc">MINT PRICE</div>
									<div class="pricing-table-content-holder">
										<ul>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>
												Limited supply, transferrable lifetime membership to
												LightReel and all its future platforms
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>
												Access to Greenlight, Live Updates, and Content Gallery portals on LightReel
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>
												"Founder" tier membership, the only tier with access to future investment opportunities
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>
												Participation rewards such as NFT drops and collectibles
											</li>
											<li class="pricing-list included-yes">
												<span class="fa fa-check" aria-hidden="true"></span>
												Access to all the possible present and future
												LightReel platform features, "Founder" tier members will also have exclusive features only available to this tier 
											</li>
										</ul>
									</div>
								</div>
								<div class="pricing-button">
									<quantity-select @change="($event) => nfts_selected = $event">

									</quantity-select>
									<br />
									<a href="https://discord.gg/8rVn45yJpp" class="button">MINT COMING SOON</a>
									<!--<mint-button :amount-selected="nfts_selected"></mint-button>-->
								</div>
							</div>
						</div>
						<div class="one_half last">
							<div class="services">
								<h2 class="entry-title medium-text-black">
									Engage with your<br />
									entertainment.
								</h2>
								<p>
									The LightReel NFT represents a lifetime membership to the
									LightReel platform. These membership NFTs are transferrable on
									secondary markets.
								</p>
								<p>
									NFTs will only be available to mint during a set 24-hour period.
									The date for the mint will be announced in the first week of March.
								</p>
								<p>Pro-tip: Anyone can mint as many NFTs as they would like in one transaction with the quantity selector. The gas fee is similar in price to minting just one NFT!</p>
								
								<p>
									After the membership sale is over, those who want to become a
									part of LightReel must buy a membership on the secondary
									markets from existing members. Community members are invited
									to join the
									<a href="https://discord.gg/8rVn45yJpp">Discord</a>,
									<a href="https://t.me/lightreel">Telegram</a>, and <a href="https://twitter.com/LightReelFund">Twitter</a> for project updates and more information.
								</p>
								<h2 class="entry-title medium-text-black">
									More questions?
									Join us!
								</h2>
<br />
								<div class="pricing-button">
									<a href="https://discord.gg/8rVn45yJpp" class="button">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16" style="width:30px;height:30px;vertical-align:middle;margin:0px 5px;">
  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
</svg> JOIN DISCORD
									</a>
									<br />
									<a href="https://t.me/lightreel" class="button">
									<svg style="width:30px;height:20px;vertical-align:middle;margin:0px 5px;" viewBox="0 0 21 18"><g fill="none"><path fill="currentColor" d="M0.554,7.092 L19.117,0.078 C19.737,-0.156 20.429,0.156 20.663,0.776 C20.745,0.994 20.763,1.23 20.713,1.457 L17.513,16.059 C17.351,16.799 16.62,17.268 15.88,17.105 C15.696,17.065 15.523,16.987 15.37,16.877 L8.997,12.271 C8.614,11.994 8.527,11.458 8.805,11.074 C8.835,11.033 8.869,10.994 8.905,10.958 L15.458,4.661 C15.594,4.53 15.598,4.313 15.467,4.176 C15.354,4.059 15.174,4.037 15.036,4.125 L6.104,9.795 C5.575,10.131 4.922,10.207 4.329,10.002 L0.577,8.704 C0.13,8.55 -0.107,8.061 0.047,7.614 C0.131,7.374 0.316,7.182 0.554,7.092 Z"></path></g></svg>
										JOIN TELEGRAM
									</a>
									<a href="https://twitter.com/LightReelFund" class="button">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" style="width:30px;height:20px;vertical-align:middle;margin:0px 5px;">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
										FOLLOW TWITTER
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>

		

		<!-- Skills Section -->
		
		

		<!-- Footer -->
		<footer class="footer">
			<div class="footer-content center-relative">
				<div class="copyright-holder">© 2022 LightReel</div>
			</div>
		</footer>

	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import ConnectWallet from "./components/ConnectWallet.vue";
import QuantitySelect from "./components/QuantitySelect.vue";
//import MintButton from "./components/MintButton.vue";
export default {
	components: {
		ConnectWallet,
		QuantitySelect,
		//MintButton
	},
	setup() {
		const nfts_selected = ref(1);

		onMounted(() => {
			const STAR_COLOR = "#04BA04";
			const STAR_SIZE = 10;
			const STAR_MIN_SCALE = 0.2;
			const OVERFLOW_THRESHOLD = 50;
			const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

			const canvas = document.querySelector("#back"),
				context = canvas.getContext("2d");

			let scale = 2, // device pixel ratio
				width,
				height;

			let stars = [];

			let pointerX, pointerY;

			let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

			let touchInput = false;

			generate();
			resize();
			step();

			window.onresize = resize;
			canvas.onmousemove = onMouseMove;
			canvas.ontouchmove = onTouchMove;
			canvas.ontouchend = onMouseLeave;
			document.onmouseleave = onMouseLeave;

			function generate() {
				for (let i = 0; i < STAR_COUNT; i++) {
					stars.push({
						x: 0,
						y: 0,
						z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
					});
				}
			}

			function placeStar(star) {
				star.x = Math.random() * width;
				star.y = Math.random() * height;
			}

			function recycleStar(star) {
				let direction = "z";

				let vx = Math.abs(velocity.x),
					vy = Math.abs(velocity.y);

				if (vx > 1 || vy > 1) {
					let axis;

					if (vx > vy) {
						axis = Math.random() < vx / (vx + vy) ? "h" : "v";
					} else {
						axis = Math.random() < vy / (vx + vy) ? "v" : "h";
					}

					if (axis === "h") {
						direction = velocity.x > 0 ? "l" : "r";
					} else {
						direction = velocity.y > 0 ? "t" : "b";
					}
				}

				star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

				if (direction === "z") {
					star.z = 0.1;
					star.x = Math.random() * width;
					star.y = Math.random() * height;
				} else if (direction === "l") {
					star.x = -OVERFLOW_THRESHOLD;
					star.y = height * Math.random();
				} else if (direction === "r") {
					star.x = width + OVERFLOW_THRESHOLD;
					star.y = height * Math.random();
				} else if (direction === "t") {
					star.x = width * Math.random();
					star.y = -OVERFLOW_THRESHOLD;
				} else if (direction === "b") {
					star.x = width * Math.random();
					star.y = height + OVERFLOW_THRESHOLD;
				}
			}

			function resize() {
				scale = window.devicePixelRatio || 2;

				width = window.innerWidth * scale;
				height = window.innerHeight * scale;

				canvas.width = width;
				canvas.height = height;

				stars.forEach(placeStar);
			}

			function step() {
				context.clearRect(0, 0, width, height);

				update();
				render();

				requestAnimationFrame(step);
			}

			function update() {
				velocity.tx *= 0.96;
				velocity.ty *= 0.96;

				velocity.x += (velocity.tx - velocity.x) * 0.8;
				velocity.y += (velocity.ty - velocity.y) * 0.8;

				stars.forEach((star) => {
					star.x += velocity.x * star.z;
					star.y += velocity.y * star.z;

					star.x += (star.x - width / 2) * velocity.z * star.z;
					star.y += (star.y - height / 2) * velocity.z * star.z;
					star.z += velocity.z;

					// recycle when out of bounds
					if (
						star.x < -OVERFLOW_THRESHOLD ||
						star.x > width + OVERFLOW_THRESHOLD ||
						star.y < -OVERFLOW_THRESHOLD ||
						star.y > height + OVERFLOW_THRESHOLD
					) {
						recycleStar(star);
					}
				});
			}

			function render() {
				stars.forEach((star) => {
					context.beginPath();
					context.lineCap = "round";
					context.lineWidth = STAR_SIZE * star.z * scale;
					context.globalAlpha = 0.5 + 0.5 * Math.random();
					context.strokeStyle = STAR_COLOR;

					context.beginPath();
					context.moveTo(star.x, star.y);

					var tailX = velocity.x * 2,
						tailY = velocity.y * 2;

					// stroke() wont work on an invisible line
					if (Math.abs(tailX) < 0.1) tailX = 0.5;
					if (Math.abs(tailY) < 0.1) tailY = 0.5;

					context.lineTo(star.x + tailX, star.y + tailY);

					context.stroke();
				});
			}

			function movePointer(x, y) {
				if (typeof pointerX === "number" && typeof pointerY === "number") {
					let ox = x - pointerX,
						oy = y - pointerY;

					velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1);
					velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1);
				}

				pointerX = x;
				pointerY = y;
			}

			function onMouseMove(event) {
				//  touchInput = false;
				//movePointer( event.clientX, event.clientY );
			}

			function onTouchMove(event) {
				//touchInput = true;
				//movePointer( event.touches[0].clientX, event.touches[0].clientY, true );
				//event.preventDefault();
			}

			function onMouseLeave() {
				pointerX = null;
				pointerY = null;
			}

			function multiClickFunctionStop() {
				$("#toggle").off("click");
				$("#toggle").toggleClass("on");
				if ($("#toggle").hasClass("on")) {
					$(".menu-holder").addClass("show");
					$("#toggle").on("click", multiClickFunctionStop);
				} else {
					$(".menu-holder").removeClass("show");
					$("#toggle").on("click", multiClickFunctionStop);
				}
			}

			function isotopeSetUp() {
				$(".grid").isotope({
					itemSelector: ".grid-item",
					masonry: {
						columnWidth: ".grid-sizer",
					},
				});
			}

			$("#toggle").on("click", multiClickFunctionStop);

			$(window).on("load", function () {
				// isotopeSetUp();
				// setUpParallax();
				// hashFix();
				$(".doc-loader").fadeOut(600);
			});

			function setActiveMenuItem() {
				var currentSection = null;
				$(".section").each(function () {
					var element = $(this).attr("id");
					if ($("#" + element).is("*")) {
						if ($(window).scrollTop() >= $("#" + element).offset().top - 115) {
							currentSection = element;
						}
					}
				});
				$("#header-main-menu ul li")
					.removeClass("active")
					.find('a[href*="#' + currentSection + '"]')
					.parent()
					.addClass("active");
			}

			$(window).on("resize", function () {
				fixForBlogThumbnailSize();
				setActiveMenuItem();
				fixTeamLayout();
			});

			$(window).on("scroll", function () {
				setActiveMenuItem();
			});
		});

		return {
			nfts_selected
		};
	},
};
</script>

<style>
</style>
