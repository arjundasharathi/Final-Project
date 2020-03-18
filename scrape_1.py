from splinter import Browser
from bs4 import BeautifulSoup as bs
import time


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=False)


def scrape_info():
    browser = init_browser()

    url = "https://www.point2homes.com/CA/Real-Estate-Listings/ON/Brampton.html"
    browser.visit(url)

    time.sleep(1)

    html = browser.html
    soup = bs(html, "html.parser")

    Address = soup.find('div', id='address-container')

    Beds = Beds.find_all('strong')[0].text

    Baths = Baths.find_all('strong')[1].text

    Price = Price.find_all('span')[0].text

    House_Data = {
        "Address": Address,
        "Beds": Beds,
        "Baths": Baths,
        "Price": Price
    }

    browser.quit()

    return House_Data
