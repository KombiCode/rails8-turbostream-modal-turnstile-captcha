class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  
  def verify_turnstile
    # Should be activated in prod with real remote ip
    # Does not work in dev mode with local host
    # verified = Turnstile.verify(token: params["cf-turnstile-response"], ip: request.remote_ip)
    # verified
    true
  end  
end
