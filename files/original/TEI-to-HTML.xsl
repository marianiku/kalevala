<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:tei="http://www.tei-c.org/ns/1.0">
<xsl:output method="html" version="4.0"
    encoding="UTF-8" indent="no"/>

    <xsl:template match="/">
      <html>
        <body>
          <div>
            <xsl:apply-templates select="tei:TEI/tei:text/tei:body/tei:div" />
          </div>
        </body>
      </html>
    </xsl:template>

    <xsl:template match="//tei:lg">
      <p><xsl:apply-templates/></p>
    </xsl:template>

    <xsl:template match="//tei:l">
      <span><xsl:apply-templates/></span><br />
    </xsl:template>

    <xsl:template match="//tei:opener">
      <p id="opener"><xsl:apply-templates/></p>
    </xsl:template>

    <xsl:template match="tei:p">
      <p><xsl:apply-templates/></p>
    </xsl:template>

    <xsl:template match="tei:pb">
      <span class="pb"><xsl:value-of select="." /></span>
    </xsl:template>

    <xsl:template match="tei:add">
      <span class="sup" title="lisäys"><xsl:apply-templates/></span>
    </xsl:template>

    <xsl:template match="tei:hi[@rend = 'underline']">
      <span class="underline" title="alleviivaus"><xsl:apply-templates/></span>
    </xsl:template>

    <xsl:template match="tei:hi[@rend = 'italics']">
      <em><xsl:apply-templates/></em>
    </xsl:template>

    <xsl:template match="//tei:emph">
      <span class="bolded"><xsl:apply-templates/></span>
    </xsl:template>

    <xsl:template match="tei:del">
      <span class="del" title="poisto"><xsl:apply-templates/></span>
    </xsl:template>

    <xsl:template match="tei:unclear">
      <span class="unclear" title="epäselvä kohta"><xsl:apply-templates/></span>
    </xsl:template>

    <xsl:template match="tei:app">
      <a class="comm tooltip bt" href="#">
        <xsl:value-of select="current()/tei:lem" />
        <span><xsl:value-of select="current()/tei:rdg" /></span>
      </a>
    </xsl:template>

    <xsl:template match="tei:ref" priority="99">
      <a class="tooltp2" title="kommentaari">
        <xsl:value-of select="node()"/>
      </a>
      <span class="value3"><xsl:value-of select="current()/tei:note" /></span>
    </xsl:template>

    <xsl:template match="tei:ptr">
      <a href="{current()/@target}"><xsl:text>[1]</xsl:text></a>
    </xsl:template>

    <xsl:template match="tei:table">
      <table>
        <xsl:apply-templates/>
      </table>
    </xsl:template>

    <xsl:template match="tei:table/tei:row">
      <tr>
        <xsl:apply-templates/>
      </tr>
    </xsl:template>

    <xsl:template match="tei:table/tei:row/tei:cell">
      <td>
        <xsl:apply-templates/>
      </td>
    </xsl:template>

    <xsl:template match="tei:gap">
      <span style="background-color:grey;color:grey;"><xsl:text>gap</xsl:text></span>
    </xsl:template>

    <xsl:template match="tei:label[@type = 'popup']">
      <a class="tooltp"><xsl:value-of select="current()" /></a>
      <span class="value1">
        <xsl:value-of select="//tei:note[@n=current()/@n]/tei:ab[1]" />
        <xsl:if test="//tei:note[@n=current()/@n]/tei:ab[2]">
          <xsl:text> </xsl:text>
          <a class="more"><xsl:text>Katso lisää</xsl:text></a>
        </xsl:if>
      </span>
      <xsl:if test="//tei:note[@n=current()/@n]/tei:ab[2]">
        <span class="value2"><xsl:value-of select="//tei:note[@n=current()/@n]/tei:ab[2]" /></span>
      </xsl:if>
    </xsl:template>

    <xsl:template match="tei:label[@type = 'commentary']">
      <a class="tooltp2">
        <xsl:value-of select="current()" />
        <span class="value3"><xsl:value-of select="//tei:note[@n=current()/@n]/tei:ab" /></span>
      </a>
    </xsl:template>

    <xsl:template match="tei:lb">
       <xsl:text disable-output-escaping="yes">&lt;br/&gt;</xsl:text>
    </xsl:template>
  </xsl:stylesheet>
