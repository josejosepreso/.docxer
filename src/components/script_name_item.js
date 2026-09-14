const scriptName0 = `
	<w:p>
		<w:pPr>
			<w:pStyle w:val="ListParagraph"/>
			<w:widowControl/>
			<w:numPr>
				<w:ilvl w:val="0"/>
				<w:numId w:val="10"/>
			</w:numPr>
			<w:spacing w:lineRule="auto" w:line="240" w:before="0" w:after="0"/>
			<w:contextualSpacing/>
			<w:jc w:val="start"/>
			<w:rPr>
				<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri"/>
				<w:lang w:val="en-US"/>
			</w:rPr>
		</w:pPr>
		<w:r>
			<w:rPr>
				<w:rFonts w:eastAsia="Calibri" w:cs="Calibri"/>
				<w:kern w:val="0"/>
				<w:sz w:val="22"/>
				<w:szCs w:val="22"/>
				<w:lang w:val="en-US" w:eastAsia="en-US" w:bidi="ar-SA"/>
			</w:rPr>
			<w:t>Ejecución Scripts –</w:t>
		</w:r>
		<w:r>
			<w:rPr>
				<w:rFonts w:eastAsia="Calibri" w:cs=""/>
				<w:kern w:val="0"/>
				<w:sz w:val="22"/>
				<w:szCs w:val="22"/>
				<w:lang w:val="en-US" w:eastAsia="en-US" w:bidi="ar-SA"/>
			</w:rPr>
			<w:t xml:space="preserve"> {SCRIPT_NAME}</w:t>
		</w:r>
	</w:p>
`;

const scriptName1 = `
	<w:p>
		<w:pPr>
			<w:pStyle w:val="ListParagraph"/>
			<w:widowControl/>
			<w:numPr>
				<w:ilvl w:val="0"/>
				<w:numId w:val="9"/>
			</w:numPr>
			<w:spacing w:lineRule="auto" w:line="240" w:before="0" w:after="0"/>
			<w:contextualSpacing/>
			<w:jc w:val="start"/>
			<w:rPr>
				<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri"/>
				<w:lang w:val="en-US"/>
			</w:rPr>
		</w:pPr>
		<w:r>
			<w:rPr>
				<w:rFonts w:eastAsia="Calibri" w:cs="Calibri"/>
				<w:kern w:val="0"/>
				<w:sz w:val="22"/>
				<w:szCs w:val="22"/>
				<w:lang w:val="es-SV" w:eastAsia="en-US" w:bidi="ar-SA"/>
			</w:rPr>
			<w:t>{SCRIPT_NAME}</w:t>
		</w:r>
	</w:p>
`;

 const scriptName2 = `
    <w:p>
		<w:pPr>
			<w:pStyle w:val="ListParagraph"/>
			<w:widowControl/>
			<w:numPr>
				<w:ilvl w:val="0"/>
				<w:numId w:val="8"/>
			</w:numPr>
			<w:spacing w:lineRule="auto" w:line="240" w:before="0" w:after="0"/>
			<w:contextualSpacing/>
			<w:jc w:val="start"/>
			<w:rPr>
				<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri"/>
				<w:lang w:val="en-US"/>
			</w:rPr>
		</w:pPr>
		<w:r>
			<w:rPr>
				<w:rFonts w:eastAsia="Calibri" w:cs="Calibri"/>
				<w:kern w:val="0"/>
				<w:sz w:val="22"/>
				<w:szCs w:val="22"/>
				<w:lang w:val="es-SV" w:eastAsia="en-US" w:bidi="ar-SA"/>
			</w:rPr>
			<w:t>{SCRIPT_NAME}</w:t>
		</w:r>
	</w:p>
`;

module.exports = { scriptName0, scriptName1, scriptName2 };