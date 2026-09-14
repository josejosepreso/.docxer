const scriptUrl = `
    <w:p>
    	<w:pPr>
    		<w:pStyle w:val="Normal"/>
    		<w:widowControl/>
    		<w:spacing w:lineRule="auto" w:line="240" w:before="0" w:after="0"/>
    		<w:jc w:val="start"/>
    		<w:rPr>
    			<w:rStyle w:val="Hyperlink"/>
    		</w:rPr>
    	</w:pPr>
    	<w:r>
    		<w:fldChar w:fldCharType="begin"></w:fldChar>
    	</w:r>
    	<w:r>
    		<w:rPr>
    			<w:rStyle w:val="Hyperlink"/>
    			<w:rFonts w:eastAsia="Calibri" w:cs=""/>
    			<w:kern w:val="0"/>
    			<w:sz w:val="22"/>
    			<w:szCs w:val="22"/>
    			<w:lang w:val="es-SV" w:eastAsia="en-US" w:bidi="ar-SA"/>
    		</w:rPr>
    		<w:instrText xml:space="preserve"> HYPERLINK &quot;http://bitbucket.agile.banco.latam:7990/projects/APPHN/repos/app-cgf-script/pull-requests/485/diff&quot; \l &quot;app_digital_hn/CREATE%20SCHEMA%20sch_remittance%20AND%20TABLE%20remittance_operation.sql&quot;</w:instrText>
    	</w:r>
    	<w:r>
    		<w:rPr>
    			<w:rStyle w:val="Hyperlink"/>
    			<w:rFonts w:eastAsia="Calibri" w:cs=""/>
    			<w:kern w:val="0"/>
    			<w:sz w:val="22"/>
    			<w:szCs w:val="22"/>
    			<w:lang w:val="es-SV" w:eastAsia="en-US" w:bidi="ar-SA"/>
    		</w:rPr>
    		<w:fldChar w:fldCharType="separate"/>
    	</w:r>
    	<w:r>
    		<w:rPr>
    			<w:rStyle w:val="Hyperlink"/>
    			<w:rFonts w:eastAsia="Calibri" w:cs=""/>
    			<w:kern w:val="0"/>
    			<w:sz w:val="22"/>
    			<w:szCs w:val="22"/>
    			<w:lang w:val="es-SV" w:eastAsia="en-US" w:bidi="ar-SA"/>
    		</w:rPr>
    		<w:fldChar w:fldCharType="end"/>
    	</w:r>
    	<w:r>
    		<w:rPr>
    			<w:rStyle w:val="Hyperlink"/>
    			<w:rFonts w:eastAsia="Calibri" w:cs=""/>
    			<w:kern w:val="0"/>
    			<w:sz w:val="22"/>
    			<w:szCs w:val="22"/>
    			<w:lang w:val="es-SV" w:eastAsia="en-US" w:bidi="ar-SA"/>
    		</w:rPr>
    		<w:t>{SCRIPT_URL}</w:t>
    	</w:r>
		<w:br/>
    </w:p>
`;

module.exports = { scriptUrl };