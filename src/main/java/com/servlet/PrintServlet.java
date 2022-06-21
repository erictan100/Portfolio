package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class PrintServlet extends HttpServlet
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		String Myname="Eric Tan Shing Li";
		String ID="SWE1904863";
		String Department="Software Engineering";
		
		PrintWriter out = res.getWriter();
		out.println("My name is "+Myname+", "+ID+" and I am studying in Xiamen University Malaysia under "+Department+".");
	}
}
