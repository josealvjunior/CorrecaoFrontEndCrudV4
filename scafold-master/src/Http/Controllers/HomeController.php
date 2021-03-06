<?php

namespace Bestmomo\Scafold\Http\Controllers;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
	/**
	 * Create a new controllers instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}
	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('home');
	}
}