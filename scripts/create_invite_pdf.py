from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A5, landscape
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen.canvas import Canvas

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUTPUT = ROOT / "output" / "pdf" / "manuel-donna-wedding-invite.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
W, H = landscape(A5)
CREAM = colors.HexColor("#f1eee7")
INK = colors.HexColor("#202522")
SAGE = colors.HexColor("#879886")


def centered(pdf, text, y, font, size, color=INK):
    pdf.setFillColor(color)
    pdf.setFont(font, size)
    pdf.drawCentredString(W / 2, y, text)


pdf = Canvas(str(OUTPUT), pagesize=(W, H))
pdf.setFillColor(CREAM)
pdf.rect(0, 0, W, H, fill=1, stroke=0)
pdf.drawImage(ImageReader(PUBLIC / "manuel-donna.png"), 0, H * 0.28, W, H * 0.72, preserveAspectRatio=True, anchor="c", mask="auto")
pdf.setFillColor(colors.Color(0.12, 0.16, 0.13, alpha=0.45))
pdf.rect(0, H * 0.28, W, H * 0.72, fill=1, stroke=0)
centered(pdf, "A NEW CHAPTER BEGINS", H * 0.77, "Helvetica", 7, colors.white)
centered(pdf, "Manuel & Donna", H * 0.61, "Times-Roman", 33, colors.white)
centered(pdf, "20 · 09 · 2026", H * 0.52, "Times-Roman", 12, colors.white)
centered(pdf, "Matthew 19:6", H * 0.16, "Helvetica-Bold", 7, SAGE)
centered(pdf, "So they are no longer two, but one. Therefore what God has joined together,", H * 0.11, "Times-Italic", 8, INK)
centered(pdf, "let man not separate.", H * 0.07, "Times-Italic", 8, INK)
pdf.showPage()

pdf.setFillColor(CREAM)
pdf.rect(0, 0, W, H, fill=1, stroke=0)
centered(pdf, "WITH JOYFUL HEARTS", H - 42, "Helvetica", 7, SAGE)
centered(pdf, "Manuel Varghese & Donna Sanju", H - 72, "Times-Roman", 22)
centered(pdf, "invite you to celebrate their marriage", H - 93, "Times-Italic", 11, SAGE)
pdf.setStrokeColor(colors.HexColor("#b8c3b4"))
pdf.line(48, H - 120, W - 48, H - 120)

left, right, top = 48, W / 2 + 18, H - 142
pdf.setFillColor(SAGE)
pdf.setFont("Helvetica", 7)
pdf.drawString(left, top, "THE CEREMONY")
pdf.drawString(right, top, "THE CELEBRATION")
pdf.setFillColor(INK)
pdf.setFont("Times-Roman", 14)
pdf.drawString(left, top - 25, "3:00 PM")
pdf.drawString(right, top - 25, "6:30 PM")
pdf.setFont("Helvetica", 8)
pdf.drawString(left, top - 43, "St. George Jacobite Syrian Church")
pdf.drawString(right, top - 43, "PetRose Event Centre")
pdf.setFillColor(colors.HexColor("#687269"))
pdf.drawString(left, top - 58, "Sunday, 20 September 2026")
pdf.drawString(right, top - 58, "Sunday, 20 September 2026")
pdf.drawString(left, top - 72, "Chooracode, Ernakulam, Kerala 683562")
pdf.drawString(right, top - 72, "P.P Road, Vadayampady P.O, Puthencruz,")
pdf.drawString(right, top - 85, "Ernakulam, Kerala 682308")

pdf.setStrokeColor(colors.HexColor("#b8c3b4"))
pdf.line(48, 92, W - 48, 92)
centered(pdf, "FOR MORE DETAILS", 72, "Helvetica", 7, SAGE)
centered(pdf, "+91 94470 49509  ·  +91 99610 62460", 55, "Helvetica", 9)
centered(pdf, "RSVP: eben92paul@gmail.com", 38, "Helvetica", 8)
pdf.save()
print(OUTPUT)
